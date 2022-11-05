import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {

    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me, I'm classy</button>
            </div>
        )
    }
}

export default EventsClass