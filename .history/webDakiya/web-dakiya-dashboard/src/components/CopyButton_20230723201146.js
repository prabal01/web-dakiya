import React from 'react'
import Iconify from './iconify'
import Proptypes from 'prop-types'


CopyButton.propTypes = {
   text:Proptypes.string.isRequired
}

export default function CopyButton(text) {
  return (
   <Button onClick={()=>navigator.clipboard.writeText(text)}><Iconify icon='ph:copy'/></Button> 
  )
}
