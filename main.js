function display() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var template = $('<div class="thumbnail" >');
		template.append('<h1>' + fighters[i].name + '</h1>');
		template.append('<p>' + fighters[i].abilities.length + ' abilities</p>');
		template.append('<p>' + fighters[i].bases.length + ' bases</p>');
		template.append('<p>' + fighters[i].styles.length + ' styles</p>');
		template.append('<p>' + fighters[i].finishers.length + ' finishers</p>');
		if (fighters[i].special != undefined) {
			template.append('<p>' + fighters[i].special.length + ' special</p>');
		} else {
			template.append('<p>No special</p>')
		}

		$("body").append(template);
	}
}

function process() {
	$("body").empty();

	var prio = [];
	var pow = [];
	var range = [];

	for (var i = 0 ; i < fighters.length ; i++) {

		for (var j = 0 ; j < fighters[i].finishers.length; j++) {
			if (prio.indexOf(fighters[i].finishers[j].priority) == -1) {
				prio.push(fighters[i].finishers[j].priority);
			}
			if (pow.indexOf(fighters[i].finishers[j].power) == -1) {
				pow.push(fighters[i].finishers[j].power);
				if (fighters[i].finishers[j].power == "25") {
					console.log(fighters[i]);
				}
			}
			if (range.indexOf(fighters[i].finishers[j].range) == -1) {
				range.push(fighters[i].finishers[j].range);
			}
		}
		
		
	}
	$("body").append('<div> range : ' + JSON.stringify(range) + ',</div>');
	$("body").append('<div> pow : ' + JSON.stringify(pow) + ',</div>');
	$("body").append('<div> prio : ' + JSON.stringify(prio) + ',</div>');
}

$(window).on('load', process);