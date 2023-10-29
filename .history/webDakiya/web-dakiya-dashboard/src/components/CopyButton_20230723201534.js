import React from 'react'
import { Button } from '@mui/material'
import Proptypes from 'prop-types'
import Iconify from './iconify'


CopyButton.propTypes = {
   text:Proptypes.string.isRequired
}

export default function CopyButton({text}) {
  return (
   <Button onClick={()=>navigator.clipboard.writeText(text)}><Iconify icon='ph:copy'/></Button> 
  )
}
