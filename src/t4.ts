export {}; // hack to ignore Book from task 3

// Define the 'ElectronicDevice' interface
interface ElectronicDevice {
    type: 'electronic';
    brand: string | null;
    model: string | null;
}

// Define the 'Book' interface
interface Book {
    type: 'book';
    title: string | null;
    author: string | null;
}


// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book



// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
    const brand = prompt('Entere device brand');
    const model = prompt('Entere device model');
    const type = 'electronic'
    const EdeviceOBJ : ElectronicDevice = {type ,brand, model}
    return EdeviceOBJ
}

function createBook(): Book {
    const title = prompt('Entere book title');
    const author = prompt('Entere book author');
    const type = 'book'
    const bookOBJ :Book = {type, title, author}
    return bookOBJ
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    } else if (product.type === 'book'){
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
