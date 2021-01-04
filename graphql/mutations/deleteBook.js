var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('../types/bookType');
var bookModel = require('../../models/book');

exports.remove = {
    type: bookType.bookType,
    args: {
        id: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: async (root, args) => {
        const removedBook = bookModel.findByIdAndRemove(args.id);
        if (!removeBook) {
            throw new Error('error');
        }
        return removedBook;
    }
}