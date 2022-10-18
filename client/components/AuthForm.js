import React, { Component } from 'react';
import { handleFormSubmit } from '../handleFormSubmit';
import { hashHistory } from 'react-router';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (!this.props.user && nextProps.user) {
            hashHistory.push('/dashboard');
        }
    }

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

    handleErrorResponse(errors) {
        this.setState({ errors })
    }

    onSubmit(e) {
        e.preventDefault();

        handleFormSubmit(this.state, this.props.mutate, this.handleErrorResponse);
    }

    render() {
        const { email, password, errors } = this.state;

        return (
            <div className="row">
                <form onSubmit={this.onSubmit} className="col s4">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={e => this.handleChange(e, "email")}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => this.handleChange(e, "password")}
                        />
                    </div>
                    {errors.map(err => (
                        <div
                            key={err}
                            style={{ color: "red", fontWeight: "bold" }}
                        >
                            {err}
                        </div>
                    ))}
                    <button
                        className="btn"
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </div>
        )
    }
}

// const AuthFormFunc = ({ mutate }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState([]);
//
//     const onSubmit = e => {
//         e.preventDefault();
//
//         handleFormSubmit({ email, password }, mutate, setErrors);
//     }
//
//     return (
//         <div className="row">
//             <form onSubmit={onSubmit} className="col s4">
//                 <div className="input-field">
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={email}
//                         onChange={setEmail}
//                     />
//                 </div>
//                 <div className="input-field">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={setPassword}
//                     />
//                 </div>
//                 {errors.map(err => (
//                     <div
//                         key={err}
//                         style={{ color: "red", fontWeight: "bold" }}
//                     >
//                         {err}
//                     </div>
//                 ))}
//                 <button
//                     className="btn"
//                     type="submit"
//                 >
//                     submit
//                 </button>
//             </form>
//         </div>
//     )
// }

export default AuthForm;