// 修改数据，和mutations的区别在于，action是异步的
import {
  getUser
} from '../services/getDate.js'

import {
  GET_USERINFO
} from './mutation-types.js'

export default {
  async getUserInfo({commit, state}) {
    let res = await getUser();
    commit(GET_USERINFO, res)
  }
}
