import * as actionTypes from './consants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => {
  return {
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
  }
}

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch((err) => {
      console.log('轮播图数据传输错误', err)
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data.result))
      dispatch(changeEnterLoading(false))
    }).catch(() => {
      console.log('推荐歌单数据传输错误')
    })
  }
}

