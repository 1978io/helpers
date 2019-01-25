
// 1978.io helper functions

function _roundTo(number, x) {
    let rounded = x * Math.round(number/x);
    return(rounded);
}

function _rnd(x) {
    let randint = Math.round((Math.random())*x);
    return(randint);
}

function _leadingZero(x) {
    if(x <= 9) {
        x = "0" + x;
    }
    return(x);
}

// helper function to convert seconds into mm:ss
function _mmss(seconds) {
    seconds = Math.round(seconds);
    var m = _leadingZero(Math.floor(seconds / 60));
    var s = _leadingZero(seconds - (m * 60));
    var duration = m + ":" + s;
    return duration;
}

function _numberSuffix(x) {
    x = x.toString();
    var ones = parseInt(x.substr(x.length - 1, 1), 10);
    var tens = parseInt(x.substr(x.length - 2, 1), 10);
    if(tens === 1) {
        return x + "th";
    }
    switch (ones) {
        case 1:
        return x + "st";
        case 2:
        return x + "nd";
        case 3:
        return x + "rd";
        default:
        return x + "th";
    }
}

function textNumber(number) { // number to words
    var output;
    number = Math.floor(number);
    if(number < 20) {
        output = ones(number);
    } else
    if(number < 100) {
        output = tens(number);
    }
    function ones(number) {
        let ones;
        
        switch(number) {
            case 0:
            ones = "Zero";
            break;
            case 1:
            ones = "One";
            break;
            case 2:
            ones = "Two";
            break;
            case 3:
            ones = "Three";
            break;
            case 4:
            ones = "Four";
            break;
            case 5:
            ones = "Five";
            break;
            case 6:
            ones = "Six";
            break;
            case 7:
            ones = "Seven";
            break;
            case 8:
            ones = "Eight";
            break;
            case 9:
            ones = "Nine";
            break;
            case 10:
            ones = "Ten";
            break;
            case 11:
            ones = "Eleven";
            break;
            case 12:
            ones = "Twelve";
            break;
            case 13:
            ones = "Thirteen";
            break;
            case 14:
            ones = "Fourteen";
            break;
            case 15:
            ones = "Fifteen";
            break;
            case 16:
            ones = "Sixteen";
            break;
            case 17:
            ones = "Seventeen";
            break;
            case 18:
            ones = "Eighteen";
            break;
            case 19:
            ones = "Nineteen";
            break;
        }
        return(ones);    
    }
    
    function tens(number) {
        let t = Math.floor(number/10);
        let o = number-(t*10);
        let tens;
        
        switch(t) {
            case 2:
            tens = "Twenty";
            break;
            case 3:
            tens = "Thirty";
            break;
            case 4:
            tens = "Forty";
            break;
            case 5:
            tens = "Fifty";
            break;
            case 6:
            tens = "Sixty";
            break;
            case 7:
            tens = "Seventy";
            break;
            case 8:
            tens = "Eighty";
            break;
            case 9:
            tens = "Ninety";
            break;
        }
        if(o > 0) {
            o = ones(o);
            return(tens+" "+o);
        }
        else {
            return(tens);
        }
    }
    return(output);
}