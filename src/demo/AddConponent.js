import React from 'react';
import ReactDOM from 'react-dom';
import PropTyps from 'prop-types'
class AddConpent extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
    }
    add(input){

        const item  =this.arrInput.value.trim();
        if(!item){
            return ;
        }
        this.props.addArray(item);
        this.arrInput.value='';
    }
    render(){
        return(
            <div>
                <input type='text' ref ={input =>this.arrInput = input}></input>
                <button onClick={this.add}>添加 #{this.props.count}</button>
            </div>
            
        );
    }
}
AddConpent.PropTyps={
    count:PropTyps.number.isRequired,
    addArray:PropTyps.func.isRequired
}
export default AddConpent;