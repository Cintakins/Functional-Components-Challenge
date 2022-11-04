import React from "react";
import css from 'NavBarSimple.module.css';

class NavBarSimple extends React.Component {
    constructor() {
        super();
        this.state = {
            intro: "Hello, guest!",
            buttonText: "Login",
        };
    };

    handleClick() {
        this.setState({
            intro: "Welcome back, user!",
            buttonText: "Logout",
        });
    }
    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.intro}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple
