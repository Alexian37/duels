function display() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var template = $('<div class="thumbnail" >');
		template.append('<h1>' + fighters[i][0].replace(/_/g,' ') + '</h1>');

		$("body").append(template);
	}
}

function process() {
	$("body").empty();

	for (var i = 0 ; i < fighters.length ; i++) {

		var obj = {};
		obj.name = fighters[i][0].replace(/_/g,' ');
		obj.abilities = [];
		for (var j = 0 ; j < fighters[i][1].length / 3; j++) {
			obj.abilities.push({
				name: fighters[i][1][j*3],
				type: fighters[i][1][j*3+1],
				text: fighters[i][1][j*3+2],
			})
		}
		obj.styles = [];
		obj.bases = [];
		for (var j = 0 ; j < fighters[i][2].length / 5; j++) {
			if (j < 5) {
				obj.styles.push({
					name: fighters[i][2][j*5],
					range: fighters[i][2][j*5+1],
					power: fighters[i][2][j*5+2],
					priority: fighters[i][2][j*5+3],
					capacity: fighters[i][2][j*5+4],
				});
			} else {
				obj.bases.push({
					name: fighters[i][2][j*5],
					range: fighters[i][2][j*5+1],
					power: fighters[i][2][j*5+2],
					priority: fighters[i][2][j*5+3],
					capacity: fighters[i][2][j*5+4],
				});
			}
		}
		obj.finishers = [];
		for (var j = 0 ; j < fighters[i][3].length / 6; j++) {
			obj.finishers.push({
				name: fighters[i][3][j*6+1],
				range: fighters[i][3][j*6+2],
				power: fighters[i][3][j*6+3],
				priority: fighters[i][3][j*6+4],
				capacity: fighters[i][3][j*6+5],
			});
		}
		if (fighters[i][4] != undefined) {
			obj.special = fighters[i][4];
		}

		$("body").append('<div>' + JSON.stringify(obj) + ',</div>');
	}
}

$(window).on('load', process);