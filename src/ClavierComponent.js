import React, {Component} from 'react';

class ClavierComponent extends Component {

    render() {
        return (
            <div className="button">

                <div>
                    <button className="buttonform" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button className="buttonform" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button className="buttonform" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button className="buttonform" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                </div>
                

                <div>
                    <button className="buttonform" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button className="buttonform" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button className="buttonform" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button className="buttonform" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                </div>
               

                <div>
                    <button className="buttonform" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button className="buttonform" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button className="buttonform" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button className="buttonform" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>
               
                <div>
                    <button className="buttonform" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button className="buttonform" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button className="buttonform" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button className="buttonform" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                </div>
                

                <div>
                    <button className="buttonform" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button className="buttonform" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button className="buttonform" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button className="buttonform" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                </div>
               
            </div>
        );
    }
}


export default ClavierComponent;