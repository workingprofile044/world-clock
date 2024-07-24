import React, { Component } from 'react';

class ClockForm extends Component {
    state = {
        name: '',
        timezone: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddClock(this.state.name, parseInt(this.state.timezone, 10));
        this.setState({ name: '', timezone: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="City Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="number"
                    name="timezone"
                    placeholder="Timezone Offset"
                    value={this.state.timezone}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default ClockForm;
