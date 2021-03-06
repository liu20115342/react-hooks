import React, {memo} from 'react'
import LazyLoad from 'react-lazyload'
import { ListWrapper, List, ListItem } from './style'
import { getCount } from '../../utils'
function RecommendList(props) {
  return (
    <ListWrapper>
      <h1 className='title'>推荐歌单</h1>
      <List>
        {
          props.recommendList.map(item => {
            return (
              <ListItem key={item.id}>
                <div className='img_wrapper'>
                  <div className='decorate'></div>
                  <LazyLoad placeholder={<img src={require('../../assets/music.png')} width="100%" height="100%" alt="music"/>}>
                    <img src={item.picUrl + '?param=300*300'} width="100%" height="100%" alt="music" />
                  </LazyLoad>
                  <div className='play_count'>
                    <i className='iconfont play'>&#xe885;</i>
                    <span className='count'>{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default memo(RecommendList)
