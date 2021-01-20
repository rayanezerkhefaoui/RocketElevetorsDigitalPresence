

var n = document.getElementById("number-of-appartments");
var m = document.getElementById("maximum-occupancy");
var o = document.getElementById("number-of-basements");
var p = document.getElementById("number-of-elevators");
var q = document.getElementById("business-hours");
var r = document.getElementById("number-of-coporations");
var s = document.getElementById("number-of-companies");
var t = document.getElementById("number-of-parking-spots");

    


function calc() {
    var a = parseInt(document.querySelector("#number-of-appartments").value);
    var b = parseInt(document.querySelector("#number-of-floors").value);
    var c = parseInt(document.querySelector("#maximum-occupancy").value);
    var d = parseInt(document.querySelector("#number-of-basements").value);
    var e = parseInt(document.querySelector("#number-of-elevators").value);
    var f = parseInt(document.querySelector("#business-hours").value);
    var g = parseInt(document.querySelector("#number-of-corporations").value);
    var h = parseInt(document.querySelector("#number-of-companies").value);
    var i = parseInt(document.querySelector("#number-of-parking-spots").value);
    var j = a / b;
    var elev1 = j / 6;
    var operator = document.querySelector("#building").value;
    var calculate;

    if (building === "residential");
     { m.display = "block";
        
    }
    if (building === "residential");
     { p.style.display = "block";
        
    }
    if (building === "residential");
     { q.style.display = "block";
        
    }
    if (building === "residential");
     { r.style.display = "block";
        
    }
    if (building === "residential");
     { s.style.display = "block";
        
    }
    if (building === "residential");
     { t.style.display = "block";
        
    }
    if (building === "residential");
     { t.style.display = "block";
        
    }
    if (building === "corporate");
     { s.style.display = "block";
        
    }
    if (building === "corporate");
     { q.style.display = "block";
        
    }
    if (building === "corporate");
     { p.style.display = "block";
        
    }
    if (building === "commercial");
     { r.style.display = "block";
        
    }
    if (building === "commercial");
     { m.style.display = "block";
        
    }
    if (building === "commercial");
     { q.style.display = "block";
        
    }
    if (building === "commercial");
     { q.style.display = "block";
        
    }
    if (building === "hybrid");
     { p.style.display = "block";
        
    }
    if  (building === "hybrid");
     { r.style.display = "block";
        
    }


    if (building == "residential") {
        calculate = a / b;
        calculate = j / 6;
    }
    if (building == "residential") {
        elev1 >=20;
        elev1 = elev1 + 1;
        
    }


    document.querySelector("#result").innerHTML = calculate
}


    
  
  