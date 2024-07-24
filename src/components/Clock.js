import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.calculateTime(props.timezone)
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: this.calculateTime(this.props.timezone) });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateTime(timezone) {
        const date = new Date();
        const utcOffset = date.getTimezoneOffset() / 60;
        const localTime = date.getTime() + (utcOffset + timezone) * 3600000;
        return new Date(localTime);
    }

    render() {
        const { time } = this.state;
        const { name, onDelete } = this.props;
        return (
            <div className="clock">
                <h2>{name}</h2>
                <p>{time.toLocaleTimeString()}</p>
                <button onClick={onDelete}>Remove</button>
            </div>
        );
    }
}

export default Clock;
