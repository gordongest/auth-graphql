import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import login from '../queries/login';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(() => hashHistory.push('/'))
            .catch(err => {
                console.warn("ERR:", err.message)
            })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={e => this.handleChange(e, "email")}/>
                    <input type="password" onChange={e => this.handleChange(e, "password")}/>
                    <button type="submit" onClick={this.handleSubmit}>submit</button>
                </form>
            </div>
        )
    }

}

export default graphql(login)(LogIn);