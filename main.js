function calculate(startn, endn) {
    var stop = endn + 1; 
    var currentNumber = startn; 
    var totalSum = [];  
    while (currentNumber != stop){
        var prime = true; 

        if(currentNumber == 0){
            var prime = false; 
        }

        else if (currentNumber == 1){
            var prime = false; 
        }

        else {
        for(var i = 2; i < currentNumber; i++){ 
            if(currentNumber % i == 0){
            prime = false; 
        }
        }
    }

    if (prime == true){
        totalSum.push(currentNumber); 
        console.log(totalSum); 
    }
    currentNumber = currentNumber + 1; 
}

    console.log("currentNumber" + currentNumber); 
    console.log("Prime:" + prime); 
    var sumFinal = 0; 
    for(var x = 0; x < totalSum.length; x++){
        sumFinal = sumFinal + totalSum[x]; 
    }

    document.getElementById("displaySum").innerHTML = `The sum of all prime numbers between ${startn} and ${endn} is ${sumFinal}.`; 
}

$(document).ready(function(){ //when document is ready, function will be executed.

    $(document).keypress(function(key){
        if (key.which == 13){
            var startn3 = document.getElementById("startn2").value; 
            var endn3 = document.getElementById("endn2").value;
            startn3 = parseInt(startn3); 
            endn3 = parseInt(endn3); 
            if ( (isNaN(startn3)) || (isNaN(endn3)) ){
                console.log("m"); 
                document.getElementById("displaySum").innerHTML = "Ah, you didn't enter a number!";
            }
            else if (startn3 > endn3) {
                document.getElementById("displaySum").innerHTML = "Uh oh! Looks like your starting number is greater than your ending number!";
            }
            else {
                calculate(startn3, endn3)
            }
        }
    })
})

