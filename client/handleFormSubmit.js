import fetchCurrentUser from './queries/fetchCurrentUser';
import { hashHistory } from 'react-router';

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