import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor() {
        super();
        this.state = {
            intro: "Hello, guest!",
            buttonText: "Login",
        };
    };

    handleClick() {
        this.setState((prevState) => ({
            intro: prevState.message === "Hello guest!" ? "Welcome back, user!" : "Hello guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }));
    }
    render() {
        return (
            <div className={css.NavBar}>
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
