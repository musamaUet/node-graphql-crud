const { GraphQLNonNull } = require('graphql');

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var graphqlQLNonNull = require('graphql').graphqlQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

exports.bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => {
        return {
            id: { type: GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString },
            author: { type: GraphQLString }
        }
    }
})