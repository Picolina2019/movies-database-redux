import React from 'react';
import CallApi from '../../api/api';
import { withAuth } from '../../hoc/withAuth';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {},
    submitting: false,
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: null,
        base: null,
      },
    }));
  };

  handleBlur = (e) => {
    const { name } = e.target;
    const errors = this.validateFields();
    let error = errors[name];
    if (error) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: error,
        },
      }));
    }
  };

  validateFields = () => {
    const errors = {};
    if (this.state.username === '') {
      errors.username = 'username can not be empty';
    }
    if (this.state.password === '') {
      errors.password = 'password can not be empty';
    }
    return errors;
  };

  onSubmit = () => {
    this.setState({
      submitting: true,
    });
    let session_id = null;
    CallApi.get('/authentication/token/new')
      .then((data) => {
        return CallApi.post('/authentication/token/validate_with_login', {
          body: {
            username: this.state.username,
            password: this.state.password,
            request_token: data.request_token,
          },
        });
      })
      .then((data) => {
        return CallApi.post('/authentication/session/new', {
          body: {
            request_token: data.request_token,
          },
        });
      })
      .then((data) => {
        session_id = data.session_id;
        return CallApi.get('/account', {
          params: {
            session_id: data.session_id,
          },
        }).then((user) => {
          this.setState(
            {
              submitting: false,
            },
            () => {
              this.props.authActions.updateAuth({ user, session_id });
              this.props.authActions.toggleLoginModal();
            }
          );
        });
      })
      .catch((error) => {
        this.setState({
          submitting: false,
          errors: {
            base: error.status_message,
          },
        });
      });
  };

  onLogin = (e) => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          ...errors,
        },
      }));
    } else {
      this.onSubmit();
    }
  };

  render() {
    const { username, password, errors, submitting } = this.state;
    return (
      <div className='form-login-container'>
        <form className='form-login'>
          <h1 className='h3 mb-3 font-weight-normal text-center'>
            Authorization
          </h1>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className={
                errors.username ? ' form-control error' : 'form-control '
              }
              id='username'
              placeholder='Username'
              name='username'
              value={username}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.username && (
              <div className='invalid-feedback'>{errors.username}</div>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className={
                errors.password ? 'form-control error' : 'form-control '
              }
              id='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            {errors.password && (
              <div className='invalid-feedback'>{errors.password}</div>
            )}
          </div>
          <button
            type='submit'
            className='btn btn-lg btn-primary btn-block'
            onClick={this.onLogin}
            disabled={submitting}>
            Enter
          </button>
          {submitting && <div className='text-center'>Loading...</div>}
          {errors.base && (
            <div className='invalid-feedback text-center'>{errors.base}</div>
          )}
        </form>
      </div>
    );
  }
}

export default withAuth(LoginForm);
