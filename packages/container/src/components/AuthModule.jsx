import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/Auth'
import { useHistory } from 'react-router-dom'

const MarketingModule = () => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname}) => {
        if (history.pathname !== nextPathname) history.push(nextPathname)
      } 
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default MarketingModule
