
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(message);
    }
}

showNumbers(10)