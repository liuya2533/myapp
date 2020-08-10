import React from 'react';
import ReactDOM from 'react-dom';

class Calculate extends React.Component{
    constructor(porps){
        super(porps);
        this.state={
            num1:0,
            num2:0,
            sum:0
        };
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.add=this.add.bind(this);
    }
    handleChange1(e){
        this.setState({

            num1:Number(e.target.value)
        })
    }
    handleChange2(e){
        this.setState({
            num2:Number(e.target.value)
        })
    }
    add(){
        let s=new Number;
        s=this.state.num1+this.state.num2;
        //alert('hhh');
        //此处的this不bind就不是组件自己
        this.setState({
            sum:s
        });
    }
    render(){
        return(
            <div>
                <input value={this.state.num1} onChange={this.handleChange1}/>+
                <input value={this.state.num2} onChange={this.handleChange2}/>=
                <text>{this.state.sum}</text>
                <button onClick={this.add}>求和</button>
            </div>
        
        );
    }
}
export default Calculate;