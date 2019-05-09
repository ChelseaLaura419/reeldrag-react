import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Modal extends Component {
    state = {
        username: '',
        password: '',
        successfulLogin: false
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        // cool API call 
        // if() {
        //     // USERNAME AND PASSWORD ARE CORRECT AND USER EXISTS
        //     this.setState({successfulLogin: true})
        // } else if () {
        //     // USERNAME EXIST
        //     this.setState({error: "Your password is incorrect"})
        // } else {
        //     // USERNAME DOESN'T EXIST
        //     this.setState({error: "Username doesn't exist"})
        // }
        this.setState({successfulLogin: true})
    }
    render() {
        const { username, password, successfulLogin } = this.state;
        if (successfulLogin) {
            return <Redirect to="/" />
        }
        return (
            <div className="modal show" tabindex="-1" role="dialog">
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <Link to="/" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Link>
                            </div>
                            <div className="modal-body">
                                <p>Username <input name="username" value={ username } type="text" onChange={this.handleChange} /></p>
                                <p>Password <input name="password" value={ password } type="password" onChange={this.handleChange} /></p>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to="/" className="btn btn-secondary" data-dismiss="modal">Close</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Modal;
