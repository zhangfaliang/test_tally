import React, { PureComponent } from 'react'
import { Row, Col, Card, Icon } from 'antd'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: '2008',
    食物: 4000,
    商品: 2400,
    衣服: 2400,
  },
  {
    name: '2009',
    食物: 3000,
    商品: 1398,
    衣服: 2210,
  },
  {
    name: '2011',
    食物: 2000,
    商品: 9800,
    衣服: 2290,
  },
  {
    name: '2012',
    食物: 2780,
    商品: 3908,
    衣服: 2000,
  },
  {
    name: '2013',
    食物: 1890,
    商品: 4800,
    衣服: 2181,
  },
  {
    name: '2014',
    食物: 2390,
    商品: 3800,
    衣服: 2500,
  },
  {
    name: '2015',
    食物: 3490,
    商品: 4300,
    衣服: 2100,
  },
]

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/'

  render() {
    return (
      <Col lg={12} md={24}>
        <Card
          bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
          }}
        >
          <BarChart
            width={500}
            height={360}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="商品" stackId="a" fill="#8884d8" />
            <Bar dataKey="衣服" stackId="a" fill="#82ca9d" />
            <Bar dataKey="食物" stackId="a" fill="#ffc658" />
          </BarChart>
        </Card>
      </Col>
    )
  }
}
