import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col } from 'antd'
import { Page } from 'components'
import {
  NumberCard,
  ThirdParty,
  LineChart,
  RecentSales,
  DutyRatio,
  User,
  BarChart,
} from './components'
import { Color } from 'utils'
import styles from './index.less'
import store from 'store'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}
@connect(({ app, dashboard, loading }) => ({
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {
  render() {
    const userDetail = store.get('user')
    const { avatar, username } = userDetail
    const { dashboard, loading } = this.props
    const {
      weather,
      sales,
      quote,
      numbers,
      recentSales,
      comments,
      completed,
      browser,
      cpu,
      user,
    } = dashboard
    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={24} md={24}></Col>
    ))
    var data1 = {
      icon: 'pay-circle-o',
      color: Color.green,
      title: '本月消费',
      number: 2781,
    }
    return (
      <Page
        // loading={loading.models.dashboard && sales.length === 0}
        className={styles.dashboard}
      >
        <Row gutter={24}>
          <NumberCard {...data1} />
          <User
            {...user}
            avatar={avatar}
            username={username}
            bodyStyle={bodyStyle}
          />
          <LineChart data={sales} />
          <BarChart data={sales} />
          {/* <ThirdParty quote={quote} weather={weather} loading={loading} /> */}
          <RecentSales data={recentSales} bodyStyle={bodyStyle} />
          {/* <Comments data={comments} bodyStyle={bodyStyle} /> */}
          {/* <Completed data={completed} /> */}
          <DutyRatio data={browser} bodyStyle={bodyStyle} />
        </Row>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
