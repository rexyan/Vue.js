// 具体的方法，修改值
import {
  GET_USERINFO
} from "./mutation-types";

export default {
  [GET_USERINFO](state, values) {
    state.test_value = values
  }
}

