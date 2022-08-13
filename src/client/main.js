import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Col, Row } from 'antd';
import React, { useState } from 'react';
import Left from '/mnt/d/answer/projects/src/client/njisx.js'
import 'antd/dist/antd.css';
import Right  from '/mnt/d/answer/projects/src/client/right.js';
import DemoColumn from '/mnt/d/answer/projects/src/client/chartss.js';
const { Header, Footer, Sider, Content } = Layout;

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
                                    <input type="text" name="" class="navbar__input" placeholder="Search my site..."/>
                                        <input type="submit" name="" class="navbar__button" value=""/>
                                </div>
                            </form>
                            </div>
                                <div class="navbar__right">
                                    <label for="navbarToggler" class="navbar__toggler__label">
                                        <span class="navbar__hamberger"></span>
                                        <span>Menu</span></label>
                                    <input type="checkbox" name="" class="navbar__toggler__input" id="navbarToggler"/>
                                        <ul class="navbar__links">
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Connections</a>
                                                <ul class="navbar__sublinks">
                                                    <li><a href="#">linkedin</a></li>
                                                    <li><a href="#">dribbble</a></li>
                                                    <li><a href="#">behance</a></li>
                                                    <li><a href="#">codepen</a></li>
                                                    <li><a href="#">vimeo</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Jobs</a>
                                                <ul class="navbar__sublinks">
                                                    <li><a href="#">front-end developer</a></li>
                                                    <li><a href="#">back-end developer</a></li>
                                                    <li><a href="#">web designer</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">About Us</a></li>
                                        </ul>
                                </div>
                            </nav>
                        </div>

                        
                    </Row>
                    <Row>
                        <Col span={18} push={6}>
                           <Right/>
                           <DemoColumn/>
                        </Col>
                        <Col span={6} pull={18} style={{padding: '20px'}}>
                        <Left/>
                        </Col>
                    </Row>
                </>
                );
};

                export default App;