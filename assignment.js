// Problem:1  radianToDegree

function radianToDegree(radian) {
    const oneRedian = 57.2958;
    const degree = oneRedian * radian;
    return degree;
}
const TotalDegree = radianToDegree(10);
console.log(TotalDegree);

// Problem:2  isJavaScriptFile 

/*function isJavaScriptFile(num) {

    const x = typeof(num)
    console.log(x)
    if (x === string) {
        console.log(true)
    }
}
const tt = isJavaScriptFile('app.js')*/

function oilPrice(diesel,petrol,octane) {
    const oneLiterDeg = 114;
    const oneLiterPat = 130;
    const oneLiterOct = 135;

    const degQuantity = oneLiterDeg * diesel;
    const patQuantity = oneLiterPat * petrol;
    const octQuantity = oneLiterOct * octane;
    
    const totalPrice = degQuantity + patQuantity + octQuantity;
    return totalPrice;
}

const totalCost = oilPrice(10,10,10);
console.log(totalCost);

// Problem 4: publicBusFare

function publicBusFare(num) {
    const busFare = 50 *2 ;
    const microBus = 11;
    const publicBusTeket = 250;

    const bus = num - busFare;
    const micro = bus - microBus;
    const busFareRemaining = micro * publicBusTeket;
    return busFareRemaining;

}
const totalPublicBusCost = publicBusFare (117);
console.log(totalPublicBusCost)



// Problem 5: isBestFriend

const best = { name: "siju", friend: "babu" }
const besty ={ name: "babu", friend: "siju" }

function isBestFriend() {
    if (best.friend === besty.name) {
        console.log(true);
    }
    else{
        false;
    }
    return;
}

isBestFriend()