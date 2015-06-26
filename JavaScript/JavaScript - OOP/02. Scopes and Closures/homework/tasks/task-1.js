/* Task Description */
/*
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
function solve() {
    var library = (function () {
        var books = [];
        var categories = [];
        var selected = [];

        function listBooks(property) {
            if (books.length === 0) {
                return [];
            }
            if (books.length === 1) {
                if (property) {
                    if (books[0].category === property.category) {
                        return books;
                    } else {
                        return [];
                    }
                } else {
                    return books;
                }
            }
            if (property) {
                selected = books.filter(function (a) {
                    return a.category === property.category;
                });
            } else {
                selected = books;
            }
            return selected.sort(function (a, b) {
                return a.ID - b.ID
            });
        }

        function addBook(book) {
            book.ID = books.length + 2;
            if (!book.author) {
                throw new Error('Invalid author name');
            }
            else if (book.isbn.length != 10 && book.isbn.length != 13) {
                throw new Error('Invalid ISBN');
            }
            for (var i = 0; i < books.length; i += 1) {
                if (books[i].isbn == book.isbn) {
                    throw new Error('Book with the same isbn exists');
                } else if (books[i].title == book.title) {
                    throw new Error('Book with the same title exists');
                }
            }
            var exists = false;
            if (book.category) {
                if (categories.length === 0) {
                    categories.push(new Category(book.category));
                } else {
                    for (i = 0; i < categories.length; i += 1) {
                        if (book.category == categories[i].name) {
                            exists = true;
                        }
                    }
                    if (!exists) {
                        categories.push(new Category(book.category));
                    }
                }
            } else {
                categories.push(new Category('Some Name' + categories.length + 2));
            }
            books.push(book);
            return book;
        }

        function listCategories() {
            categories.sort(function (a, b) {
                return a.ID - b.ID;
            });
            return categories.map(function (element) {
                return element.name;
            })
        }

        function Category(name) {
            if (typeof name !== 'string' || name.length < 2 || name.length > 100) {
                throw new Error('Invalid category name');
            }
            this.ID = categories.length + 2;
            this.name = name;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}
solve();
module.exports = solve;