import React from 'react';
import ReactDOM from 'react-dom';
import ListConponent from './ListConponent';
import AddConpent from './AddConponent';

class MyCaponent01 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array :[ '吃饭','睡觉','打豆豆','敲代码'] 
        }
        this.addArray = this.addArray.bind(this)
    }

    //状态值在哪个组件，那么就在那个组件里更新状态值，子组件只能调用父组件的方法来更新状态值
    addArray(arr){
        const {array} = this.state;
        array.unshift(arr);
        this.setState({array})

    }
    render(){
        
        return (
            <div>
                <h2>添加列表</h2>
                <AddConpent count={this.state.array.length+1} addArray={this.addArray}></AddConpent>
                <ListConponent array={this.state.array}></ListConponent>
            </div>
        )
    }
}

export default MyCaponent01;