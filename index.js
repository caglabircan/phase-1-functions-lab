// Code your solution in this file!
/* function distanceFromHqInBlocks(x){
    if (x>42){
        return x-42
    }
    else{
        return 42-x
    }
};

*/

function distanceFromHqInBlocks(x) {
    const result = (x>42 ? x-42: 42-x);
    return (result)
}

function distanceFromHqInFeet(x) {
   return distanceFromHqInBlocks(x)*264
}

function distanceTravelledInFeet(start, destination) {
    return (start > destination ? (start - destination)*264 : (destination - start)*264);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 2 / 100;
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}