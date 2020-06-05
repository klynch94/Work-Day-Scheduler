
$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

// creating array that matches my textarea ids to loop through 
var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function getTime(time) {
    for(var i = 0; i<9; i++) {
         
        if(militaryTime[i]<moment().hour()) {
            $("#" + i).addClass("past");
        } else if (militaryTime[i] === moment().hour()) {
            $("#" + i).addClass("present");
        } else if(militaryTime[i] === moment().hour()) {
            $("#" + i).addClass("future");
        }

        var getData = localStorage.getItem(i)

        if(getData) {
            $("#" + i).val(getData)
        }
    }
}

getTime();

$(".saveBtn").on("click", function() {
    var dataId = $(this).attr("data-id");
    var getText = $("#" + dataId).val();
    console.log(getText);
    localStorage.setItem(dataId, getText);
})




$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

