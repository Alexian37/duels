function display() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var template = $('<div class="thumbnail summary" >');
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

function giveFlight(nb) {
	var res = '';
	for (var i = 0 ; i < nb ; i++) res +='*';
	return res;
}

function displayIcon() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var template = $('<div class="thumbnail small" >');
		if (fighters[i].set != undefined) template.addClass('set' + fighters[i].set);
		template.append('<h1>' + fighters[i].name + '</h1>');
		if (fighters[i].flight != undefined) template.append('<p>' + giveFlight(fighters[i].flight) + '</p>');

		$("body").append(template);
	}
}

function giveAbility(ab) {
	var div = $('<div class="ability">');
	div.append('<span class="sub">(' + ab.type +  ') </span> ');
	div.append('<span class="title">' + ab.name +  ': </span> ');
	div.append('<span class="desc">' + ab.text +  ' </span> ');
	return div;
}

function giveCard(card, style, finisher) {
	var div = $('<div class="card">');
	if (style === true) div.addClass("style");
	if (finisher === true) div.addClass("finisher");
	div.append('<span class="title">' + card.name +  '</span> ');
	div.append('<span class="carac"><span class="range">' + card.range +  '</span><span class="power">' + card.power +  '</span><span class="priority">' + card.priority +  '</span></span> ');
	div.append('<div class="capacity">' + card.capacity +  ' </div> ');
	return div;
}

function displayFull() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var template = $('<div class="thumbnail full" >');
		if (fighters[i].set != undefined) template.addClass('set' + fighters[i].set);
		template.append('<h1>' + fighters[i].name + '</h1>');

		if (fighters[i].abilities.length > 0) template.append('<h2>Abilities</h2>');
		for (var j = 0 ; j < fighters[i].abilities.length ; j++) {
			template.append(giveAbility(fighters[i].abilities[j]));
		}
		
		template.append('<h2>Cards</h2>');
		for (var j = 0 ; j < fighters[i].styles.length ; j++) {
			template.append(giveCard(fighters[i].styles[j], true));
		}
		for (var j = 0 ; j < fighters[i].bases.length ; j++) {
			template.append(giveCard(fighters[i].bases[j]));
		}
		
		for (var j = 0 ; j < fighters[i].finishers.length ; j++) {
			template.append(giveCard(fighters[i].finishers[j], false, true));
		}
		
		if (fighters[i].special != undefined) {
			template.append('<p>' + fighters[i].special.length + ' special</p>');
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

$(window).on('load', displayFull);