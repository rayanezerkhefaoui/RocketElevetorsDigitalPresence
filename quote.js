$("#number-of-appartments").hide();
$("#maximum-occupancy").hide();
$("#number-of-basements").hide();
$("#number-of-elevators").hide();
$("#business-hours").hide();
$("#number-of-coporations").hide();
$("#number-of-companies").hide();
$("#number-of-parking-spots").hide();
$("#number-of-floors").hide();

var numAppart = document.getElementById("number-of-appartments");
var maxOccup = document.getElementById("maximum-occupancy");
var numBase = document.getElementById("number-of-basements");
var numElev = document.getElementById("number-of-elevators");
var busHours = document.getElementById("business-hours");
var numCorpo = document.getElementById("number-of-coporations");
var numComp = document.getElementById("number-of-companies");
var numPark = document.getElementById("number-of-parking-spots");
var numFloors = document.getElementById("number-of-floors");

    $("#building").on('change', function type() {
    var chooses = $("#building option:select").val();
    console.log("select");

    if(chooses == "default"){
        console.log("select");
            $("#number-of-appartments").hide();
            $("#number-of-floors").hide();
            $("#number-of-basements").hide();
            $("#maximum-occupancy").hide();
            $("#number-of-elevators").hide();
            $("#business-hours").hide();
            $("#number-of-coporations").hide();
            $("#number-of-companies").hide();
            $("#number-of-parking-spots").hide();

        
        };

    if(chooses == "residential"){
        console.log("residential");
        $("#number-of-appartments").show();
            $("#number-of-floors").show();
            $("#number-of-basements").show();
            $("#maximum-occupancy").hide();
            $("#number-of-elevators").hide();
            $("#hours").hide();
            $("#number-of-coporations").hide();
            $("#number-of-companies").hide();
            $("#number-of-parking-spots").hide();
    };

    if(chooses == "corporate"){
        $("#number-of-appartments").hide();
            $("#number-of-floors").show();
            $("#number-of-basements").show();
            $("#maximum-occupancy").show();
            $("#number-of-elevators").hide();
            $("#hours").hide();
            $("#number-of-coporations").show();
            $("#number-of-companies").hide();
            $("#number-of-parking-spots").show()

    };

    if(chooses == "commercial"){
        $("#number-of-appartments").hide();
            $("#number-of-floors").show();
            $("#number-of-basements").show();
            $("#maximum-occupancy").hide();
            $("#number-of-elevators").show();
            $("#hours").hide();
            $("#number-of-coporations").hide();
            $("#number-of-companies").show();
            $("#number-of-parking-spots").show()
    };

    if(chooses == "hybrid"){
        $("#number-of-appartments").hide();
            $("#number-of-floors").show();
            $("#number-of-basements").show();
            $("#maximum-occupancy").show();
            $("#number-of-elevators").hide();
            $("#hours").hide();
            $("#number-of-coporations").hide();
            $("#number-of-companies").show();
            $("#number-of-parking-spots").show()
    };

    }


,function calc() {
    var numberAppt = parseInt(document.querySelector("#number-of-appartments").value);
    var numFloor = parseInt(document.querySelector("#number-of-floors").value);
    var maxOccupancy = parseInt(document.querySelector("#maximum-occupancy").value);
    var numBasement = parseInt(document.querySelector("#number-of-basements").value);
    var numelevator = parseInt(document.querySelector("#number-of-elevators").value);
    var businessHours = parseInt(document.querySelector("#business-hours").value);
    var numCorp = parseInt(document.querySelector("#number-of-corporations").value);
    var numcompanies = parseInt(document.querySelector("#number-of-companies").value);
    var numparking = parseInt(document.querySelector("#number-of-parking-spots").value);
    var operator = document.querySelector("#building").value;
    var calculate;

    
        
    }


    ,document.querySelector("#result").innerHTML = calculate



    
  
    )