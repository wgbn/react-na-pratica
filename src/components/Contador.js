import React from 'react';

class Contador extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            contador: 0
        };
    }

    decrementar () {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    incrementar () {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    render () {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                    <button onClick={this.decrementar.bind(this)}>-</button>
                </div>
            </div>
        );
    }

}

export default Contador;