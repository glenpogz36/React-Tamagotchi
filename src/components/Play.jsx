import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = { play: 50 }
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(event) {
        this.setState({ play: this.state.play + 1 });
    }

    timer() {
        this.setState({
            play: this.state.play - 1
        })
        if (this.state.play < 1) {
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
                    {this.state.play}
                    <button onClick={this.buttonClicked}>Play </button>
                </div>
            </div>
        );
    }
}
export default Play;
