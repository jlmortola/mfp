import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/Auth'
import { useHistory } from 'react-router-dom'

const AuthModule = ({ onSignIn }) => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onSignIn,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) history.push(nextPathname)
      } 
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default AuthModule
