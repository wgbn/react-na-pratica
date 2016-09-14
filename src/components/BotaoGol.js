import React from 'react';

class BotaoGol extends React.Component {

    constructor () {
        super ();
    }

    handleClick (e) {
        e.preventDefault();
        this.props.marcarGol();
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Gol</button>
            </div>
        );
    }
}

export default BotaoGol;