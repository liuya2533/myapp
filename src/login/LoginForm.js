import React from 'react';
import './login.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.submithander=this.submithander.bind(this);
    }
    submithander(event){
        event.preventDefault();
        const code = this.nameinput.value;
        const pwd = this.pwdinput.value;
        const jsondata= {"code":code,"pwd":pwd};
        console.log('提交');
        fetch('http://127.0.0.1:8080/login',{
            method:'POST',
            headers:{
                    'content-type':'application/json'
                },
            body: JSON.stringify(jsondata)
        
    }).then(res=>{
        res.json().then(res=>{
            console.log(res);
        })
    })
        console.log('1');
    }

    render(){
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <div className='login'>
                        <form onSubmit={this.submithander}>
                        用户名：<input type='text' ref={input=>this.nameinput=input} name='code'></input>
                        密码：<input type='password' ref={input=>this.pwdinput=input} name ='pwd'></input>
                        <input type='submit' name='登录' ></input>
                        </form>
                    </div>

                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>@liuyah 原创</Footer>
            </Layout>
        )
    }
}

export default LoginForm