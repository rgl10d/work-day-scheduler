$(document).ready(function () {
  var now = moment();
  var hour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];

  function lineRender() {
    for (var i = 0; i < hour.length; i++) {
      var textboxId = "textbox" + i;
      var buttonId = "btn" + i;
      var row = $("<div>").attr("class", "row time-block");
      var hourEl = $("<div>").attr("class", "hour").text(hour[i]);
      var textArea = $("<textarea>").attr("id", textboxId).text(localStorage.getItem(textboxId));
      var saveBtn = $("<button>")
        .attr({
          "class": "saveBtn fas fa-save",
          "id": buttonId,
          "onClick": "saveText('" + textboxId + "')"
        })
      var parsedHour = moment(hour[i], "hh a");

      if (now.hour() === parsedHour.hour()) {
        textArea.attr("class", "present");
      } else if (now.hour() < parsedHour.hour()) {
        textArea.attr("class", "future");
      } else if (now.hour() > parsedHour.hour()) {
        textArea.attr("class", "past");
      }

      $("#schedule").append(row);
      row.append(hourEl);
      row.append(textArea);
      row.append(saveBtn);
    }
  }

  $("#currentDay").text(now.format("MMM Do YYYY"));
  lineRender();
});

function saveText(textboxId) {
    localStorage.setItem(textboxId, $("#" + textboxId).val());
  }