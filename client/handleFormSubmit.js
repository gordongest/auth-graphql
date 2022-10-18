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
        .then(() => hashHistory.push('/'))
        .catch(res => {
            errorHandler(res.graphQLErrors.map(err => err.message));
        });
}