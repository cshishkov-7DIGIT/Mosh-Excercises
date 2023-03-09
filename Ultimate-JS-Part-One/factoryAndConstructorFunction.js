let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c',
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);

//factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address1 = createAddress('a', 'b', 'c');

//constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address2 = new Address('a', 'b', 'c');

console.log(address1);
console.log(address2);