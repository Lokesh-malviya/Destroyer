import { Avatar, List,Layout } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const divStyle={
  overflowY: 'scroll',
  width:'100%',
  float: 'left',
  height:'80%',
  position:'relative'
};
const Left = () => (
  
       //<div style={divStyle}> 
       <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        width:'200vw',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        
      }}
      theme = 'light'
      width= '450px'
      
      
    >
  <List
   style={{padding : "15px"}}
   
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  </Sider>//</div>  
  
);

export default Left;