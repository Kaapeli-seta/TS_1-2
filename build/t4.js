'use strict';

// Implement instances of the 'Product' type
function createElectronicDevice() {
    const brand = prompt('Entere device brand');
    const model = prompt('Entere device model');
    const type = 'electronic';
    const EdeviceOBJ = { type, brand, model };
    return EdeviceOBJ;
}
function createBook() {
    const title = prompt('Entere book title');
    const author = prompt('Entere book author');
    const type = 'book';
    const bookOBJ = { type, title, author };
    return bookOBJ;
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else if (product.type === 'book') {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
