const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentVal, { email, password }, req) {
                return AuthService.signup(email, password, req)
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
                },
            resolve(parentVal, { email, password }, req) {
                return AuthService.login(email, password, req);
            }
        },
        logout: {
            type: UserType,
            resolve(parentVal, args, req) {
                return AuthService.logout(req);
            }
        }
    }
});

module.exports = mutation;