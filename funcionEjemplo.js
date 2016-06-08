var numAndCompDiff = function(x, y) {
        return Math.abs(x - y);
    };

    // Assign random number from 1 to 50
    var compNum = Math.floor((Math.random() * 50) + 1);
    // Assign variable for number of attempts
    var numAttempts = 1;

    var hotAndCold = function() {
        // Input field to enter number
        var enterNum = $("#enterNum").val();
        //$(enterNum).val("enterNum");
        var diffTotal = numAndCompDiff(enterNum, compNum);

        if (isNaN(enterNum) || enterNum === "") {
            $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
        } else if (diffTotal <= 5 && diffTotal > 0) {
            $("html body").animate({
                backgroundColor: "#ba0000"
            }, 1000);
            $(".gameStatusAlert").html("Your Hot <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 6 && diffTotal <= 10) {
            $("html body").animate({
                backgroundColor: "#e84700"
            }, 1000);
            $(".gameStatusAlert").html("Your Really Warm <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 11 && diffTotal <= 20) {
            $("html body").animate({
                backgroundColor: "#e88800"
            }, 1000);
            $(".gameStatusAlert").html("Your Luke Warming <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 21 && diffTotal <= 50) {
            $("html body").animate({
                backgroundColor: "#3bcde7"
            }, 1000);
            $(".gameStatusAlert").html("Your Cold <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 51) {
            $("html body").animate({
                backgroundColor: "#a3effd"
            }, 1000);
            $(".gameStatusAlert").html("Your Freezing <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else {
            $("html body").animate({
                backgroundColor: "#a4d741"
            }, 1000);
            $(".gameStatusAlert").html("Your correct, the number was " + compNum);
            $("#startOverBtn").css("display", "block");

        }
    } // end function


    $("#startOverBtn").click(function() {
        numAttempts = 0;
        $(".gameStatusAlert,.attempts,#startOverBtn").hide();
        $("#enterNum").val("");
        $("html body").animate({
            backgroundColor: "#4c5562"
        }, 1000);
    });


    //To be able to click return key
    $('#enterNum').keydown(function(event) {
        if (event.keyCode == 13) {
            $('#enterBtn').trigger('click');

        }
    });

    $(document).ready(function() {

        $("#enterBtn").click(function(enterNum) {
            //event.preventDefault();
            hotAndCold();
            $(".gameStatusAlert,.attempts,#startOverBtn").show();
            //increment number of attempts
            numAttempts++
            //stop game after 5 attempts
            if (numAttempts === 6 && enterNum !== compNum) {
                $(".gameStatusAlert").html("You Lost, the correct number was " + compNum);
                $("#startOverBtn").css("display", "block");
                $("html body").animate({
                    backgroundColor: "#4c5562"
                }, 1000);
                event.preventDefault();
            }
        });


    });
 