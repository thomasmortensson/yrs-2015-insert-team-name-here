$.expr[':'].containsInsensitive = $.expr.createPseudo(function(matchingText) {
	return function(element) {
		if($(element).text() == null) return false;
		console.log($(element).text().toLowerCase().replace(' ', '') + " - " + matchingText.toLowerCase().replace(' ', ''));
		return $(element).text().toLowerCase().replace(' ', '').search(matchingText.toLowerCase().replace(' ', '')) !== -1
	}
});

function hideElement(element) {
	element.css('display', 'none');
}

function hideElementsContainingText(matchingText) {
	// console.log(matchingText);
	$("*:containsInsensitive(" + matchingText + ")").each(function() {
		hideElement($(this))
	});
}

function hideSelectedShows() {
    get('SpoilerAlert', function(sp) {
        var programmeList = sp.SpoilerAlert;
        for (var _showName in programmeList) (function(showName) {
            if (programmeList[showName].visible) {
                var keywords = programmeList[showName].keywords;
                // console.log(keywords);
                for (var i=0; i<keywords.length; i++) {
                    hideElementsContainingText(keywords[i]);
                }
            }
        })(_showName);

    });
}

$(document).ready(function() {
	hideSelectedShows();
	// console.log("Hiding shows");
});
