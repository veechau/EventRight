"use strict";

const React = require('react');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorActions = require('../../actions/error_actions');
const ErrorStore = require('../../stores/error_store');

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
			email: "",
			address: "",
      avatar: "",
      balance: 0,
    };
  },

	componentWillMount() {
		ErrorActions.clearErrors();
		this.redirectIfLoggedIn();
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
      this.context.router.push("/home");
    }
  },

	_handleLogIn(e){
		e.preventDefault();
    SessionActions.logIn({username: "Demo_User", password: "Password"});
	},

	_handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
			email: this.state.email,
			address: this.state.address,
      avatar: this.state.avatar,
      balance: this.state.balance,
		};

    SessionActions.signUp(formData);

	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("signup");

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

		return (
			<div className="login-form-container">
				<form onSubmit={this._handleSubmit} className="login-form-box">

        <div className="login-form-header">
	        Sign Up
        </div>
					<br/>

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
            <label> Email:
              { this.fieldErrors("email") }
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input" />
            </label>

            <br />
            <label> Address:
              { this.fieldErrors("address") }
              <input type="text"
                value={this.state.address}
                onChange={this.update("address")}
                className="login-input" />
            </label>

            <br />
            <label> Profile Picture:
              { this.fieldErrors("avatar") }
              <input type="text"
                value={this.state.avatar}
                onChange={this.update("avatar")}
                className="login-input" />
            </label>


            <label>
              { this.fieldErrors("balance") }
              <input hidden="number"
                value={this.state.balance}
                onChange={this.update("balance")}
                className="login-input" />
            </label>

		        <br />
						<input type="submit" value="Submit" />
						<button className="demo-user-button" onClick={this._handleLogIn}>Demo User</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SignupForm;
