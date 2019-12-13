import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {menuItemData} from './menuItem'
import './style.css';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class LayoutCon extends Component {
  componentWillMount() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    const menuNode = this.traverse(menuItemData);
    this.setState({
      menuNode,
      canvas,
      context
    })
  }

  traverse = (data) => {
    return data.map((item, index) => {
      if (item.child) {
        return (
          <SubMenu
            key={index}
            title={
              <span>
                  <Icon type="mail"/>
                  <span className="nav-text">{item.type}</span>
                </span>
            }
          >
            {this.traverse(item.child)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={index}>
            <Icon type="user"/>
            <span className="nav-text" onClick={item.fn(this.state.context)}>{item.type}</span>
          </Menu.Item>
        )
      }
    })
  };

  render() {
    return (
      <div className="layout-container">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
              {this.state.menuNode}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: 0}}/>
            <Content style={{margin: '24px 16px 0'}}>
              <div style={{padding: 24, background: '#fff', height: '100%'}}>
                <canvas id="canvas">
                  你的浏览器居然不支持Canvas？！赶快换一个吧！！
                </canvas>
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>H5-Canvas Edu ©2019 Created by Baymi</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default LayoutCon;
