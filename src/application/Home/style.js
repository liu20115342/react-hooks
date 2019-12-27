import styled from 'styled-components'
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
    line-height: 40px;
    color: ${style['font-color-light']};
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 44px;
  background: ${style['theme-color']}
  a {
    flex: 1;
    padding: 20px 0;
    font-size: ${style['font-size-m']};
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: ${style['font-color-light']};
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`