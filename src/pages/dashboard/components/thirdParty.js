import React, { PureComponent } from 'react'
import { Row, Col, Card } from 'antd'
import { Quote, Weather } from './index'
import styles from '../index.less'
import { ScrollBar } from 'components'

import { Color } from 'utils'

export default class ThirdPartyComponent extends PureComponent {
  render() {
    const { weather, quote, loading } = this.props
    return (
      <Col lg={12} md={24}>
        <Row gutter={12}>
          <Col lg={24} md={12}>
            <Card
              bordered={false}
              className={styles.weather}
              bodyStyle={{
                padding: 0,
                height: 204,
                background: Color.blue,
              }}
            >
              <Weather
                {...weather}
                loading={loading.effects['dashboard/queryWeather']}
              />
            </Card>
          </Col>
          <Col lg={24} md={12}>
            <Card
              bordered={false}
              className={styles.quote}
              bodyStyle={{
                padding: 0,
                height: 204,
                background: Color.peach,
              }}
            >
              <ScrollBar>
                <Quote {...quote} />
              </ScrollBar>
            </Card>
          </Col>
        </Row>
      </Col>
    )
  }
}
