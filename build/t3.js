'use strict';

// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt('Enter the Books title');
    const bookAuthor = prompt('Enter the Books author');
    const bookPublicationYear = Number(prompt('Enter the Books publication year'));
    // TODO: Create an object of type 'Book' with the entered values
    const TitleInput = bookTitle ? bookTitle : undefined;
    const AuthorInput = bookAuthor ? bookAuthor : undefined;
    const YearInput = bookPublicationYear ? bookPublicationYear : undefined;
    const book = { title: TitleInput, author: AuthorInput, publicationYear: YearInput };
    return book;
}
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
