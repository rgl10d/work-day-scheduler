$(document).ready(function () {
  // JS Variables
  var now = moment();
  var hour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];

  // Function Definitions
  function lineRender() {
    for (var i = 0; i < hour.length; i++) {
      var textboxId = "textbox" + i;
      var buttonId = "btn" + i;
      var row = $("<div>").attr("class", "row time-block");
      var hourEl = $("<div>").attr("class", "hour").text(hour[i]);
      var textArea = $("<textarea>").attr("id", textboxId);
      var saveBtn = $("<button>")
        .attr({
          "class": "saveBtn",
          "id": buttonId,
          "onClick": "saveText('" + textboxId + "')"
        })
        .text("Save");
      var parsedHour = moment(hour[i], "hh a");
      var appointment = localStorage.getItem(textboxId);

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
      $(textboxId).text(appointment);
      
    }
  }

  // Function calls
  $("#currentDay").text(now.format("MMM Do YYYY"));
  lineRender();
});

function saveText(textboxId) {
    localStorage.setItem(textboxId, $("#" + textboxId).val());
  }
