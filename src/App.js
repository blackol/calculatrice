import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import ClavierComponent from "./ClavierComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div  className = "containt">
                <div className="calculator-body">
                    <div className="flexdroite">
                      
                    </div>
                    <div className="element-calculette">
                      <h1>Calculatrice</h1>
                      <ResultComponent result={this.state.result}/>
                      <ClavierComponent onClick={this.onClick}/>

                    </div>
                    
                    <div className="flexdroite">
                      
                    </div>
                </div>
            </div>
        );
    }
}

export default App;