function calculate(startn, endn) {
    var stop = endn + 1; 
    console.log("Stop:" + stop); 
    var currentNumber = startn; 
    var totalSum = [];  
    while (currentNumber != stop){
        var prime = true; 
        for(var i = 0; i < currentNumber; i++){ 
            if(startn % i == 0){
            prime = false; 
        }
        }
        if (prime == true){
            totalSum.push(currentNumber); 
        }
        currentNumber = currentNumber + 1; 
    }

    console.log("currentNumber" + currentNumber); 
    console.log("Prime:" + prime); 
    var sumFinal = 0; 
    for(var x = 1; x < totalSum.length; x++){
        sumFinal = sumFinal + totalSum[1]
    }
    document.getElementById("displaySum").innerHTML = sumFinal; 
}

$(document).ready(function(){ //when document is ready, function will be executed.

    $(document).keypress(function(key){

        if (key.which == 13){
            var startn3 = document.getElementById(startn2).value; 
            console.log(startn); 
            var endn3 = document.getElementById(endn2).value;
            calculate(startn3, endn3)
        }
    })
})

