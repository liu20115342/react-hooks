import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './style'
import { NavLink } from 'react-router-dom'
const tabList = [
  {
    to: '/recommend',
    activeClassName: 'selected',
    text: '推荐'
  },
  {
    to: '/singers',
    activeClassName: 'selected',
    text: '歌手'
  },
  {
    to: '/ranks',
    activeClassName: 'selected',
    text: '排行榜'
  }
]
function Home(props) {
  const {route} = props
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">webapp</span>
        <span className="iconfont menu">&#xe62b;</span>
      </Top>
      <Tab>
        {
          tabList.map(({to, activeClassName, text}) => {
            return (
              <NavLink key={to} to={to} activeClassName={activeClassName}>
                <TabItem><span>{text}</span></TabItem>
              </NavLink>
            )
          })
        }
      </Tab>
      {
        renderRoutes(route.routes)
      }
    </>
  )
}

export default Home