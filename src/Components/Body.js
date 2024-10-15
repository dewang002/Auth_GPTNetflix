import React from 'react'
import Browser from './Browser'
import useNowplaying from '../Hooks/useNowplaying'
import usePopularmovie from '../Hooks/usePopularmovie'
import { useSelector } from 'react-redux'
import GPTpage from './GPTpage'

function Body() {
  const gptview = useSelector(state=>state.gptview.showgpt)
  useNowplaying()
  usePopularmovie()
  return (
    <div className='overflow-hidden'>
      {gptview?<GPTpage />:<Browser />}
    </div>
  )
}

export default Body
