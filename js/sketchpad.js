

$(document).ready(function() {
	makeTable(16);
});

function makeTable(length) {
	for (var i = 0; i < length; i++) {
		$('#block').append('<div class="rows"></div>');
	}
	for (var i = 0; i < length; i++) {
		$('.rows').append('<div class="column"></div>');
	}

	$('.column').css('height', dimensionCalc(length));
	$('.column').css('width', dimensionCalc(length));

	$('.column').hover(
		function() {
		$(this).addClass('active');
	});
}

function dimensionCalc(length) {
	return 600 / (length);
}

function newGrid() {
	var gridSize = prompt("Enter a new table size up to 16.");
				clearGrid();
				if (gridSize <= 16) {
					makeTable(gridSize);						
				} else {
					console.log("I don't understand");
				};
}

function clearGrid() {
	$('#block').empty();
}

