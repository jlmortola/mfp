import React, { useEffect, useRef } from 'react'
import { mount } from 'marketing/Marketing'
import { useHistory } from 'react-router-dom'

const MarketingModule = () => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname}) => {
        if (history.pathname !== nextPathname) history.push(nextPathname)
      } 
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default MarketingModule
