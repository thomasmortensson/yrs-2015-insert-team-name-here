$.expr[':'].containsInsensitive = $.expr.createPseudo(function(matchingText) {
	return function(element) {
		return $(element).text().toLowerCase().replace(' ', '').search(matchingText.replace(' ', '')) !== -1
	}
});

function hideElement(element) {
	element.css('display', 'none');
}

function hideElementsContainingText(matchingText) {
	console.log(matchingText);
	$("*:containsInsensitive(" + matchingText + ")").each(function() {
		hideElement($(this))
	});
}

// function hideElements(programmeList) {
// 	console.log(programmeList);
// 	for (show in programmeList) {
// 		if (localStorage.getItem(show) != null) {
// 			var checked = (localStorage.getItem(show) == "0") ? false : true;
// 			if (checked) {
// 				// console.log(programmeList);
// 				var show = programmeList[show]
// 				// console.log(show)

// 				for (keyword_id in show) {
// 					var keyword = show[keyword_id];
// 					// Add in remove on below keyword
// 					console.log(keyword);
// 					hideElementsContainingText(keyword)
// 				}
// 			}
// 		}
// 	}
// }

function hideSelectedShows() {
    get('SpoilerAlert', function(sp) {
        var programmeList = sp.SpoilerAlert;
        console.log(sp);
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

console.log("Hiding shows");

$(document).ready(function() {
	hideSelectedShows();
	console.log("Hiding shows");
});
