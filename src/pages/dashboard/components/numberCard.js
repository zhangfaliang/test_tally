import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Col } from 'antd'
import CountUp from 'react-countup'
import styles from './numberCard.less'

function NumberCard({ icon, color, title, number, countUp }) {
  return (
    <Col lg={24} md={24}>
      <Card
        className={styles.numberCard}
        bordered={false}
        bodyStyle={{ padding: 10 }}
      >
        <Icon className={styles.iconWarp} style={{ color }} type={icon} />
        <div className={styles.content}>
          <p className={styles.title}>{title || 'No Title'}</p>
          <p className={styles.number}>
            <CountUp
              start={0}
              end={number}
              duration={2.75}
              useEasing
              useGrouping
              separator=","
              {...(countUp || {})}
            />
          </p>
        </div>
      </Card>
    </Col>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
