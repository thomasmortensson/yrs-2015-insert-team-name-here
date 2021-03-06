function getShowToggles(items) {
  if (items[0] === null) {
    var checked = "0"
  }
  checked = items[0];
  return checked;
}

function initialiseDataStorage() {
  get('SpoilerAlert', function(spoilerAlert) {
    if ($.isEmptyObject(spoilerAlert)) {
      $.getJSON('http://spoiler-alert.co.uk/ProgrammeNames.json', function(programmeList) {
          store({
            'SpoilerAlert': programmeList
          });
          });
    }
  });
}

function buildCheckboxes() {
  // clean();
  get('SpoilerAlert', function(spoilerAlert) {
    var programmeList = spoilerAlert.SpoilerAlert;
    console.log(programmeList);
    for (var _showName in programmeList)
      (function(showName) {
        var visible = programmeList[showName].visible;
        //shows[k] = true;
        var row = document.createElement('tr');
        var show = document.createElement('td');
        show.innerHTML = showName;
        var checkboxColumn = document.createElement('td');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = visible;
        checkbox.id = showName;

        checkbox.addEventListener("click", function() {
          console.log(programmeList[showName]);
          programmeList[showName].visible = !programmeList[showName].visible;
          store(spoilerAlert);
        });

        checkboxColumn.appendChild(checkbox);
        row.appendChild(show);
        row.appendChild(checkboxColumn);
        document.getElementById('show-list').appendChild(row);

      })(_showName);
  });
}

initialiseDataStorage();
buildCheckboxes();

// vim: set sw=2 ts=2:
