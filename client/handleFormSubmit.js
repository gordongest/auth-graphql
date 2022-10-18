import fetchCurrentUser from './queries/fetchCurrentUser';

export const handleFormSubmit = ({ email, password }, mutate, errorHandler) => {
    mutate({
        variables: {
            email,
            password
        },
        refetchQueries: [{ query: fetchCurrentUser }]
    })
        .catch(res => {
            errorHandler(res.graphQLErrors.map(err => err.message));
        });
}