import { Avatar, List,Layout,Tag,Space ,Popover} from 'antd';
import React from 'react';
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


const data = [
  {
    title: 'NYKAA',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-19.15</Tag>,
    des:'Nykaa is a Mumbai-based startup. It is an online beauty and wellness store.',
    description:<> <p>Nykaa is a Mumbai-based startup. It is an online beauty and wellness store.</p> 
    <p>The company is currently worth over $2.1 billion and has major Bollywood artists like Alia Bhatt and Katrina Kaif as its investors.</p>
    <p> The way the company is headed, it is expected to raise over $3.5 billion over the coming years.</p>
    <p> Share price: 1,399.00 INR</p></>
  },
  {
    title: 'INFOSYS',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-26.20</Tag>,
    des: 'Infosys is a NYSE listed global consulting and IT services company with more than 335k employees.',
    description:<><p>From a capital of US$250, we have grown to become a US$ 16.97 billion (LTM FY23 revenues)</p>
    <p> company with a market capitalization of approximately US$ 77.88 billion.'</p>
    <p> Share price: 1,399.00 INR </p></>
  },
  {
    title: 'HDFCBANK',
    tag:<Tag color="green" style={{marginLeft:"70px"}}>-26.20</Tag>,
    des:'HDFC Bank Limited is an Indian banking and financial services company headquartered in Mumbai.',
    description:<><p> It is India largest private sector bank by assets and world 10th largest bank</p>
    <p> by market capitalisation as of April 2021. It is the third largest company by market capitalisation of $122.50 billion on the Indian stock exchanges.'</p>
    <p> Share price: 1,399.00 INR </p></>
  },
  {
    title: 'TATAMOTORS',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
  },
  {
    title: 'TCS',
    tag:<Tag color="green" style={{marginLeft:"70px"}}>89.85</Tag>,
    des:'Tata Consultancy Services (TCS) is an Indian multinational information technology (IT) services.',
    description:<><p> In April 2018, TCS became the first Indian IT company to reach $100 billion in market capitalisation'</p>
    <p>Share price: 1,399.00 INR</p></>
  },
  {
    title: 'MEESHO',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'GROWW',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'UDAAN',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'PHARMEASY',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'SWIGGY',
    tag:<Tag color="green" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'DREAM11',
    tag:<Tag color="red" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
  {
    title: 'CRED',
    tag:<Tag color="green" style={{marginLeft:"70px"}}>-20.47</Tag>,
    des:'Tata Motors Limited, a USD 37 billion organisation, is a leading global automobile manufacturer.',
    description:<><p>With a portfolio that covers a wide range of cars, SUVs, buses, trucks, pickups and defence vehicles.'</p>
    <p>Share price: 1,399.00 INR</p></>
    
  },
];
const divStyle={
  overflowY: 'scroll',
  width:'100%',
  float: 'left',
  height:'95%',
  position:'relative'
};
const Left = () => (
  
    <div style={divStyle}> 
       
  <List
   style={{padding : "15px"}}
   
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <Popover placement="bottomLeft" title={item.title} content={item.description}  arrowPointAtCenter>
        <List.Item >
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<Link to="/info">{item.title}{item.tag}</Link>}
          description={item.des}
          
        />
      </List.Item>
      </Popover>
      
    )}
  />
  </div>  
  
);

export default Left;