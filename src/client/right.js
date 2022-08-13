import { Space, Table, Tag } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Companies',
    dataIndex: 'Companies',
    key: 'Companies',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Investment',
    dataIndex: 'Investment',
    key: 'Investment',
  },
  {
    title: 'Details',
    dataIndex: 'Details',
    key: 'Details',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'looser') {
            color = 'red';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invest {record.name}</a>
        <a>Withdraw</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    Companies: 'HDFCBANK',
    Investment: 32000,
    Details: 'Expected growth of 2-3% in upcoming days',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    Companies: 'CRED',
    Investment: 4200,
    Details: 'Expected decline of 2-3% in upcoming days',
    tags: ['loser'],
  },
  {
    key: '3',
    Companies: 'PHARMEASY',
    Investment: 35000,
    Details: 'Expected growth of 2-3% in upcoming days',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    Companies: 'INFOSYS',
    Investment: 600,
    Details: 'Expected growth of 2-3% in upcoming days',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    Companies: 'MYNTRA',
    Investment: 25000,
    Details: 'Expected decline of 2-3% in upcoming days',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    Companies: 'SWIGGY',
    Investment: 10000,
    Details: 'Expected growth of 2-3% in upcoming days',
    tags: ['loser'],
  },
];

const Right = () => <Table style={{padding : "50px"}} columns={columns} dataSource={data} />;

export default Right;