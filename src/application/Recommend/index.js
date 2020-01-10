import { memo } from 'react'
import Recommend from './Recommend'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

const mapStateProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
})
const mapDispatchToState = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
export default connect(mapStateProps, mapDispatchToState)(memo(Recommend))
