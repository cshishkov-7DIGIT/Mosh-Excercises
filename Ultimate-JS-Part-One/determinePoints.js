function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoints = 5;

    if (speed < speedLimit + kmPerPoints) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speed) / kmPerPoints);

    if (points >= 12) {
        console.log('License suspended');
    } else {
        console.log('Points: ', points);

    }
}

checkSpeed(71);