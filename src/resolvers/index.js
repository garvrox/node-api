const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export default {
    Query: {
        books: async (_source, _args, { dataSources }) => {
            const books = await dataSources.bookObj.getBooks()
            console.log('dataSources', books)
            return books
        },
    },
};

