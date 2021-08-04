import React, { useEffect, useRef } from 'react'
import { mount } from 'marketing/Marketing'

const MarketingModule = () => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) mount(ref.current)
  }, [ref.current])

  return <div ref={ref} />
}

export default MarketingModule
