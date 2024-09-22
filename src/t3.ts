export {}; // hack to ignore Book from task 4
// TODO: Define a type alias named 'Book' with appropriate properties



type Book = {
    title: string | undefined;
    author: string | undefined;
    publicationYear: number | undefined;
};

// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt('Enter the Books title');
    const bookAuthor = prompt('Enter the Books author');
    const bookPublicationYear = Number(prompt('Enter the Books publication year'));

    // TODO: Create an object of type 'Book' with the entered values
    const TitleInput: string | undefined = bookTitle ? bookTitle : undefined;
    const AuthorInput: string | undefined = bookAuthor ? bookAuthor : undefined;
    const YearInput: number | undefined = bookPublicationYear ? bookPublicationYear : undefined;


    const book: Book = {title: TitleInput, author: AuthorInput, publicationYear: YearInput};
    return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
