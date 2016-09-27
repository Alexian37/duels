function trimAll(line) {
	var res = [];
	if (line.length) {
		for (var i = 0 ; i < line.length ; i++) {
			if (typeof line[i] === "string") {
				res.push(line[i].trim());
			} else {
				res.push(line[i])
			}
		}
	}
	return res;
}

function parse() {
	$("body").empty();
	for (var i = 0 ; i < fighters.length ; i++) {
		if (fighters[i].length > 5) $("body").append('<div>' + fighters[i][0] + " - " + fighters[i].length + '</div>');
	}
}

function clean() {
	$("body").empty();
	for (var i = 0 ; i < fighters.length ; i++) {
		$("body").append('<div>' + JSON.stringify(trimAll(fighters[i])) + ',</div>');
	}
}

function group() {
	$("body").empty();
	for (var i = 0 ; i < fighters.length ; i++) {
		if (fighters[i].length == 55) {
			var res = [];
			res.push(fighters[i][0], [],[],[]);
			for (var j = 1 ; j < 13 ; j++) {
				res[1].push(fighters[i][j]);
			}
			for (var j = 13 ; j < 43 ; j++) {
				res[2].push(fighters[i][j]);
			}
			for (var j = 43 ; j < 55 ; j++) {
				res[3].push(fighters[i][j]);
			}
			if (i == 2) console.log(res)
			$("body").append('<div>' + JSON.stringify(res) + ',</div>');
		} else {
			$("body").append('<div>' + JSON.stringify(fighters[i]) + ',</div>');
		}
	}
}


$(window).on('load', parse);