import React, {useEffect} from 'react'
import { forceCheck } from 'react-lazyload'
import Scroll from '../../components/baseUI/Scroll'
import Loading from '../../components/baseUI/Loading'
import Slider from '../../components/Sider'
import RecommendList from '../../components/RecommendList'
import { Content } from './style'
function Recommend(props) {

  const { bannerList, recommendList, enterLoading } = props
  const { getBannerDataDispatch, getRecommendListDispatch } = props
  useEffect(() => {
    if(!bannerList.size) {
      getBannerDataDispatch()
    }
    if(!recommendList.size) {
      getRecommendListDispatch()
    }
  }, [bannerList, recommendList, getBannerDataDispatch, getRecommendListDispatch])
  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []
  return (
    <Content>
    {
      enterLoading ? <Loading></Loading> : null
    }
      <Scroll className="list" onScroll={forceCheck} >
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}


export default Recommend
