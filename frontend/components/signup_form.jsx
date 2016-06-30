"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignupForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      avatar: "",
      balance: 0,
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	_handleLogIn(){
    SessionActions.logIn({username: "Demo_User", password: "Password"});
	},

	_handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      avatar: this.state.avatar,
      balance: this.state.balance,
		};

    SessionActions.signUp(formData);
    SessionActions.logIn({username: formData.username, password: formData.password});

	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

    let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<div className="login-form-container">
				<form onSubmit={this._handleSubmit} className="login-form-box">

        <div className="login-form-header">
	        Hello there!
        </div>
					<br/>
					Please { this.formType() } or { navLink }

	        { this.fieldErrors("base") }
					<div className="login-form">
		        <br />
						<label> Username:
		          { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input" />
						</label>

		        <br />
						<label> Password:
		          { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>

            <br />
						<label> First Name:
		          { this.fieldErrors("first_name") }
							<input type="text"
		            value={this.state.first_name}
		            onChange={this.update("first_name")}
								className="login-input" />
						</label>

            <br />
            <label> Last Name:
              { this.fieldErrors("last_name") }
              <input type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="login-input" />
            </label>

            <br />
            <label> Avatar URL:
              { this.fieldErrors("avatar") }
              <input type="text"
                value={this.state.avatar}
                onChange={this.update("avatar")}
                className="login-input" />
            </label>

            <br />
            <label> Balance:
              { this.fieldErrors("balance") }
              <input type="number"
                value={this.state.balance}
                onChange={this.update("balance")}
                className="login-input" />
            </label>

		        <br />
						<input type="submit" value="Submit" />
						<button onClick={ this._handleLogIn }>Demo User</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SignupForm;
