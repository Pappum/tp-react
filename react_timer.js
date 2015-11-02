'use strict';
    
    var React = require('react');
    var ReactDOM = require('react-dom');
    
    var Timer = React.createClass({
        getInitialState: function(){
            return { timeElapsed : 0 };
        },
        tick: function() {
            this.setState({timeElapsed: this.state.timeElapsed+1})
        },
        componentDidMount: function(){
            this.interval = setInterval(this.tick,1000)
        },
        componentWillUnmount: function(){
            clearInterval(this.interval)
        },
        render: function() {
            return (<div className="timer">Time elapsed is : {this.state.timeElapsed}</div>)
        }
    });
    
    
ReactDOM.render(
    <div>
    <Timer/>
    </div>,
    document.getElementById('container')
);