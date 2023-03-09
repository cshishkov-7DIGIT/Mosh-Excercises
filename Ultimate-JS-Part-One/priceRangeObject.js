let pricerange = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20
    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson: 50
    }
]

let restaurants = [
    { averagePerPerson: 5 }
]

function calculatePriceRange(restaurant) {
    for (let priceRange of pricerange) {
        if (priceRange.minPerPerson <= restaurant.averagePerPerson && priceRange.maxPerPerson >= restaurant.averagePerPerson) {
            return priceRange.label;
        }
    }
}

for (let restaurant of restaurants) {
    let priceRange = calculatePriceRange(restaurant);
    console.log(`Average price per person: ${restaurant.averagePerPerson} Price range: ${priceRange}`);
}
