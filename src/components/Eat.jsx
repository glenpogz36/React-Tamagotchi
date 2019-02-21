import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Eat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { eat: 50 }
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(event) {
        this.setState({ eat: this.state.eat + 1 });
    }

    timer() {
        this.setState({
            eat: this.state.eat - 1
        })
        if (this.state.eat < 1) {
            clearInterval(this.intervalId);
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.eat}
                    <button onClick={this.buttonClicked}>Eat </button>
                </div>
            </div>
        );
    }
}
export default Eat;
