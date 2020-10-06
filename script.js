$(document).ready(function (){
    var now = moment();
    var hour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    // Function Definitions
    
    function lineRender(){
        for(var i = 0; i < hour.length; i++){
            var row = $("<div>").attr("class", "row");
            var hourEl = $("<div>").attr("class", "hour").text(hour[i]);
            var textArea = $("<textarea>");
            var saveBtn = $("<button>").attr("class", "saveBtn").text("Save");
            var parsedHour = moment(hour[i], "hh a");

            if(now.hour() === parsedHour.hour()){
                textArea.attr("class", "present");
            } else if(now.hour() < parsedHour.hour()){
                textArea.attr("class", "future");
            } else if(now.hour() > parsedHour.hour()){
                textArea.attr("class", "past");
            }

            $("#schedule").append(row);
            row.append(hourEl);
            row.append(textArea);
            row.append(saveBtn);
        }
    }

    // Function calls
    $("#currentDay").text(now.format("MMM Do YYYY"));
    lineRender();

    // Event Listeners
    $()
})

/**
 * create coluimn to hold time
 */
// check to see current time and add class accordingly
// var hournow = parseInt(time.timeNumber);
// consolelog(hournow);
// if( hourNow === parseInt(timeNow)) {
//     textContent.addClass("present")
// } else if (hourNow <= parseInt(timeNow))
