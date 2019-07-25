import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Table, Col, Card } from 'antd'
import { Color } from 'utils'
import styles from './recentSales.less'

const status = {
  1: {
    color: Color.green,
    text: '消费',
  },
  2: {
    color: Color.yellow,
    text: '失败',
  },
  3: {
    color: Color.red,
    text: '水电费',
  },
  4: {
    color: Color.blue,
    text: '结束',
  },
}

function RecentSales({ data, bodyStyle }) {
  const columns = [
    {
      title: '大额消费种类',
      dataIndex: 'name',
    },
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   render: text => <Tag color={status[text].color}>{status[text].text}</Tag>,
    // },
    {
      title: '日期',
      dataIndex: 'date',
      render: text => moment(text).format('YYYY-MM-DD'),
    },
    {
      title: '消费',
      dataIndex: 'price',
      render: (text, it) => (
        <span style={{ color: status[it.status].color }}>${text}</span>
      ),
    },
  ]
  return (
    <Col lg={12} md={24}>
      <Card bordered={false} {...bodyStyle}>
        <div className={styles.recentsales}>
          <Table
            pagination={false}
            columns={columns}
            rowKey={(record, key) => key}
            dataSource={data.filter((item, key) => key < 5)}
          />
        </div>
      </Card>
    </Col>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
