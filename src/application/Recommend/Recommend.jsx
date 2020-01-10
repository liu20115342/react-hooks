import React, {useEffect} from 'react'
import Scroll from '../../components/Scroll'
import Slider from '../../components/Sider'
import RecommendList from '../../components/RecommendList'
import { Content } from './style'
function Recommend(props) {

  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDispatch } = props
  useEffect(() => {
    getBannerDataDispatch()
    getRecommendListDispatch()
  }, [])
  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []
  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}


export default Recommend
