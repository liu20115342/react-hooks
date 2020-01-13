import React, {useState} from 'react'
import Horzien from '../../components/baseUI/HorizenItem'
import { NavContainer } from './style'
import { categoryTypes, alphaTypes } from '../../api/request'
function Singers() {
  const [ category, setCategory ] = useState('')
  const [alpha, setAlpha] = useState('')
  const handleUpdateAlpha = (val) => {
    setAlpha(val)
  }
  const handleUpdateCategory = (val) => {
    setCategory(val)
  }
  return (
    <NavContainer>
      <Horzien list={categoryTypes} title={'分类(默认分类):'} oldVal={category} handleClick={(val) => handleUpdateCategory(val)}></Horzien>
      <Horzien list={alphaTypes} title={'首字母:'} oldVal={alpha} handleClick={(val) => handleUpdateAlpha(val)}></Horzien>
    </NavContainer>
  )
}

export default Singers
