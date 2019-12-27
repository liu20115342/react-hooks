import styled from 'styled-components'
import style from '../../assets/global-style'

export const  ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: ${style['font-size-m']};
    line-height: 60px;
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const ListItem = styled.div`
  width: 32%;
  position: relative;
  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0px;
      z-index: 1;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,0.4), hsla(0,0%,100%,0))
    }
    position: relative;
    height: 0px;
    padding-bottom: 100%;
    .play_count {
      z-index: 1;
      position: absolute;
      top: 2px;
      right: 2px;
      font-size: ${style['font-size-s']};
      line-height: 15px;
      color: ${style['font-color-light']};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    margin-top: 2px;
    height: 50px;
    text-align: left;
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
    overflow: hidden;
    padding: 0 2px;
  }
`