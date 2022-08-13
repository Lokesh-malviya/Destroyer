import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Breadcrumb,Space, Layout, Menu, Col, Row,Dropdown,Alert,Typography } from 'antd';
import React, { useState } from 'react';
import Left from '/mnt/d/answer/projects/src/client/njisx.js'
import 'antd/dist/antd.css';
import Right from '/mnt/d/answer/projects/src/client/right.js';
import DemoColumn from '/mnt/d/answer/projects/src/client/chartss.js';
const {Title} = Typography;
const { Header, Footer, Sider, Content } = Layout;
const menu = (
    <Menu
        items={[
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Benefits
                    </a>
                ),
                key: '0',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Expansion
                    </a>
                ),
                key: '1',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Marketing
                    </a>
                ),
                key: '2',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Money
                    </a>
                ),
                key: '3',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Safeguard
                    </a>
                ),
                key: '4',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Talent
                    </a>
                ),
                key: '5',
            },

        ]}
    />
);
const beni = (
    <Menu
        items={[
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Business Idea
                    </a>
                ),
                key: '0',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Business Plans
                    </a>
                ),
                key: '1',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Startup Basics
                    </a>
                ),
                key: '2',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Startup Funding
                    </a>
                ),
                key: '3',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Franchising
                    </a>
                ),
                key: '4',
            },
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Success Stories
                    </a>
                ),
                key: '5',
            },

        ]}
    />
);
const App = () => {

    return (
        <>

<Row style={{ backgroundColor: 'red', width: '100', height: '100' }}>
                <div class="container navbar__container">
                    <nav class="navbar__flex">
                        <div class="navbar__left">
                            <span class="navbar__hamburger"></span>
                            <form class="navbar__search">
                                <div class="navbar__inputwithicon">
                                    <input type="text" name="" class="navbar__input" placeholder="Search my site..." />
                                    <input type="submit" name="" class="navbar__button" value="" />
                                </div>
                            </form>
                        </div>
                        <div class="navbar__right">


                            <ul class="navbar__links">
                                <li><a href="#">Profile</a></li>
                                <li><li>
                                    <Dropdown overlay={beni}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                menu
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                                            </li>
                                <li>
                                    <Dropdown overlay={menu}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Startup Business
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                                
                                <li><a href="#">Growing Business</a>
                                    <ul class="navbar__sublinks">
                                        <li><a href="#">Benefits</a></li>
                                        <li><a href="#">Expansion</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Money</a></li>
                                        <li><a href="#">Safeguard</a></li>
                                        <li><a href="#">Talent</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Matured Business</a>
                                    <ul class="navbar__sublinks">
                                        <li><a href="#">Benefits</a></li>
                                        <li><a href="#">Expansion</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Money</a></li>
                                        <li><a href="#">Safeguard</a></li>
                                        <li><a href="#">Talent</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </Row>
            <Row>
                <Col span={18} push={6}>
                    <Alert
                        banner
                        message={
                            'I can be a React component, multiple React components, or just some text.' 
                        }
                    />
                    <Title italic style={{ marginTop : "40px", marginLeft : "40px"}} level={2}>Hi William's!</Title>
                    <Title  italic style={{marginLeft : "40px"}} level={4}>lets have a sneak peak towards your portfolio...</Title>
                    <Right />
                    <DemoColumn />
                </Col>
                <Col span={6} pull={18} style={{ padding: '20px' }}>
                    <Left />
                </Col>
            </Row>
        </>
    );
};

export default App;





