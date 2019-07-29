import { request, config } from 'utils'

const { APIV1 } = config

export function query(params) {
  params.key = 'i7sau1babuzwhycn'
  return request({
    url: `/test/v1/weather/now.json`,
    method: 'get',
    data: params,
  })
}
