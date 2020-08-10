import React from 'react';
import ReactDOM from 'react-dom';
import './Clock.css';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Clock extends React.Component{
    constructor(props){

        super(props);
        
        this.state ={date:new Date()};
        this.onChange=this.onChange.bind(this);
        this.toDoAjax=this.toDoAjax.bind(this);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    componentDidMount(){
        //1秒执行一次
        this.timerID =setInterval(
            ()=>this.tick(),1000
        );
    }

    componentWillUnmount(){
        //一旦Clock组件被移除后，就会调用此方法，定时器就会被清除。
        clearInterval(this.timerID);
    }
    

    
    onChange(date, dateString) {
      console.log(date, dateString);
    }
    toDoAjax(){

        console.log('ajax');
        const jsondata= {name:'hahha',pwd:'dddj'};
        fetch('http://127.0.0.1:8080/sing',{
            method:'GET',
            // body:JSON.stringify(jsondata),
            // headers:{
            //     'content-type':'application/json'
            // },
            cache:'no-cache'
        }).then(res=>{
            console.log(res.json())
        })
    }
    render(){
        return(
            <div className='clock'>
            <div>
                <h1>Hello,world</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.toDoAjax}>我是按钮</button>
            </div>
            <div>
                <DatePicker onChange={this.onChange} />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <WeekPicker onChange={this.onChange} placeholder="Select week" />
            </div>
            </div>
        );
    }
}
export default Clock;