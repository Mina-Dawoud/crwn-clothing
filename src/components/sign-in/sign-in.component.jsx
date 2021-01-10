import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type='email'
                        handleChange={this.handleChange}
                        required
                        label='email'
                    />
                    <FormInput
                        name='password'
                        value={this.state.password}
                        type='password'
                        required
                        handleChange={this.handleChange}
                        label='password'
                    />

                    <CustomButton type='submit' >Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;