import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import styled from 'styled-components'
const ScrollContaniner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
  
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props
  const { onScroll, pullDown, pullUp } = props
  const [bscroll, setBscroll] = useState();
  const scrollContaninerRef = useRef();
  /**
    * 初始化滚定实例
    * */ 
  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    })
    setBscroll(scroll)
    return () => {
      setBscroll(null)
    }
    //eslint-disable-next-line
  },[])
  /**
   * 重新渲染
   * */
  useEffect(() => {
    if(refresh && bscroll) {
      bscroll.refresh()
    }
  })
  /** 
    *
    * 监听滚动
    * */
  useEffect(() => {
    if(!onScroll || !bscroll) return
    bscroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })
    return () => {
      bscroll.off('scroll')
    }
  }, [onScroll, bscroll])
  /**
    * 上拉到底部
    * */
  useEffect(() => {
    if(!pullUp || !bscroll) return
    bscroll.on('scrollEnd', (pos) => {
      if(bscroll.y <= bscroll.maxScrollY + 100) {
        pullUp(pos)
      }
    })
    return () => {
      bscroll.off('scrollEnd')
    }
  }, [pullUp, bscroll])
  /**
    * 下拉到顶部
    * */
  useEffect(() => {
    if(!pullDown || !bscroll) return 
    bscroll.on('touchEnd', (pos) => {
      if(pos.y > 50) {
        pullDown(pos)
      }
    })
    return () => {
      bscroll.off('touchEnd')
    }
  }, [pullDown, bscroll])
  useImperativeHandle(ref, () => ({
    refresh: () => {
      if(bscroll) {
        bscroll.refresh()
        bscroll.scrollTop(0,0)
      }
    },
    getScroll: () => {
      if(bscroll) {
        return bscroll
      }
    }
  }))
  return (
    <ScrollContaniner ref={scrollContaninerRef}>
      {props.children}
    </ScrollContaniner>
  )
})

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  click: PropTypes.bool, // 是否可点击
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func, // 上拉加载
  pullDown: PropTypes.func, // 下拉加载
  pullUpLoading: PropTypes.bool, // 上来加loading
  pullDownLoading: PropTypes.bool, // 下拉加载loading
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool, //是否支持向下吸底
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  pullUpLoading: false,
  pullDownLoading: false,
  bounceTop: true,
  bounceBottom: true,
}
export default Scroll
