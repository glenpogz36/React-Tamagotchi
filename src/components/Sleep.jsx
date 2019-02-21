import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Sleep extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sleep: 50 }
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(event) {
        this.setState({ sleep: this.state.sleep + 1 });
    }

    timer() {
        this.setState({
            sleep: this.state.sleep - 1
        })
        if (this.state.sleep < 1) {
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
                    {this.state.sleep}
                    <button onClick={this.buttonClicked}>Sleep </button>
                </div>
            </div>
        );
    }
}
export default Sleep;
