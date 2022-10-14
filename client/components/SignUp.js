import React, { Component } from 'react';

class SignUp extends Component {
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
        console.log(this.state);
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

export default SignUp;