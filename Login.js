import { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}, // Add state for error messages
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validatePassword(password) {
    const errors = {};
    const minLength = 8; // Minimum password length

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < minLength) {
      errors.password = `Password must be at least ${minLength} characters long.`;
    } else if (!/[a-z]/g.test(password)) { // Check for lowercase letter
      errors.password = 'Password must contain at least one lowercase letter.';
    } else if (!/[A-Z]/g.test(password)) { // Check for uppercase letter
      errors.password = 'Password must contain at least one uppercase letter.';
    } else if (!/[0-9]/g.test(password)) { // Check for number
      errors.password = 'Password must contain at least one number.';
    } else if (!/[^a-zA-Z0-9]/g.test(password)) { // Check for special character
      errors.password = 'invalid Password .';
    }

    return errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    const errors = this.validatePassword(password); // Validate password
    this.setState({ errors }); // Update state with errors

    if (Object.keys(errors).length === 0) { // Check if there are no errors
      console.log(email, password); // (Optional) Log for testing

      // Implement your login logic here (e.g., fetch user data, handle authentication)
      // ...
    }
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <>
        <body className='loginbody'>
          <div class="container" id="container">
            <div class="form-container sign-in-container">
              <form onSubmit={this.handleSubmit}>
                <h1>Sign in</h1>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
                <button className="loginbutton">Sign In</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1 style={{ color: 'black' }}>Welcome Back!</h1>
                  <p style={{ color: 'black' }}>
                    To keep connected with us please login with your personal info
                  </p>
                  <button class="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}
