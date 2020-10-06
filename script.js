$(document).ready(function (){
    var schedule = $("#schedule");
    var now = moment().format("MMM Do YYYY");
    var hour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
    console.log(now);

    // Function Definitions
    
    function lineRender(){
        for(var i = 0; i < hour.length; i++){
            var row = $("<div>").attr("class", "row");
            var hourEl = $("<div>").attr("class", "hour").text(hour[i]);
            var textArea = $("<textarea>").attr("class", "appointment");
            var saveBtn = $("<button>").attr("class", "saveBtn").text("Save");
            var parsedHour = moment(hour[i], "hh a");

            schedule.append(row);
            row.append(hourEl);
            row.append(textArea);
            row.append(saveBtn);
            console.log(hour[i]);
        }
    }

    // Function calls
    $("#currentDay").text(now);
    lineRender();
    currentDay();

    // Event Listeners
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
