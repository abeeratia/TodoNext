import Sidebarabout from '@/component/sidebarabout'
import React from 'react'

function layout({ children }) {
  return (
    <div>
  {children}
      <Sidebarabout/>  
    </div>
  )
}

export default layout