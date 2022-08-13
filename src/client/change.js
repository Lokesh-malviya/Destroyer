import { Card, Col, Row ,Descriptions,Button} from 'antd';
import React from 'react';
import DemoDualAxes from "/mnt/d/answer/projects/src/client/graphtwo.js";
import Tablem from "/mnt/d/answer/projects/src/client/tablem.js";
const App = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}  style={{padding:"50px"}}>
    <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>

    </Row>
    <Row>
        <DemoDualAxes/>
    </Row>
    <Row>
        <Tablem></Tablem>
    </Row>
    <Row>
    <Button type="primary" danger style={{marginLeft:"91%",marginBottom:"5%"}}>
      Raise Funds
    </Button>
    </Row>
  </div>
);

export default App;