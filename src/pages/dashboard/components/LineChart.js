import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Row, Col, Card } from 'antd'
import { ScrollBar } from 'components'

import { Color } from 'utils'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styles from './sales.less'

function Sales({ data }) {
  return (
    <Col lg={12} md={24}>
      <Card
        bordered={false}
        bodyStyle={{
          padding: '24px 36px 24px 0',
        }}
      >
        <div className={styles.sales}>
          <div className={styles.title}>花销</div>
          <ResponsiveContainer minHeight={360}>
            <LineChart data={data}>
              <Legend
                verticalAlign="top"
                content={prop => {
                  const { payload } = prop
                  return (
                    <ul
                      className={classnames({
                        [styles.legend]: true,
                        clearfix: true,
                      })}
                    >
                      {payload.map((item, key) => (
                        <li key={key}>
                          <span
                            className={styles.radiusdot}
                            style={{ background: item.color }}
                          />
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  )
                }}
              />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: Color.borderBase, strokeWidth: 1 }}
                tickLine={false}
              />
              <YAxis axisLine={false} tickLine={false} />
              <CartesianGrid
                vertical={false}
                stroke={Color.borderBase}
                strokeDasharray="3 3"
              />
              <Tooltip
                wrapperStyle={{
                  border: 'none',
                  boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)',
                }}
                content={content => {
                  const list = content.payload.map((item, key) => (
                    <li key={key} className={styles.tipitem}>
                      <span
                        className={styles.radiusdot}
                        style={{ background: item.color }}
                      />
                      {`${item.name}:${item.value}`}
                    </li>
                  ))
                  return (
                    <div className={styles.tooltip}>
                      <p className={styles.tiptitle}>{content.label}</p>
                      <ul>{list}</ul>
                    </div>
                  )
                }}
              />
              <Line
                type="monotone"
                dataKey="Food"
                stroke={Color.purple}
                strokeWidth={3}
                dot={{ fill: Color.purple }}
                activeDot={{ r: 5, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </Col>
  )
}

Sales.propTypes = {
  data: PropTypes.array,
}

export default Sales
