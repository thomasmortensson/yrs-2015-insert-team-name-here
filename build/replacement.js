$.expr[':'].containsInsensitive = $.expr.createPseudo(function(matchingText) {
	return function(element) {
		if($(element).text() == null) return false;
		if($(element).is("head")) return false;
		if($(element).is("body")) return false;
		if($(element).is("html")) return false;
		if($(element).is("script")) return false;
		return $(element).text().toLowerCase().split(' ').join('').search(matchingText.toLowerCase().split(' ').join('')) !== -1
	}
});

function hideElement(element) {
	element.css('display', 'none');
}

function hideElementsContainingText(matchingText) {
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
                for (var i=0; i<keywords.length; i++) {
                    hideElementsContainingText(keywords[i]);
                }
            }
        })(_showName);

    });
}

$(document).ready(function() {
	hideSelectedShows();
});
