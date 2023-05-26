import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><br/>
    <br/>
    <br/>
    <br/>
    <Typography variant='h5'color={'green'}> <b><u>WELCOME</u></b> </Typography>
    <br/>
    <br/>
    <br/>
    <TextField variant='outlined' label='Blog Name'/>&nbsp;&nbsp;&nbsp;
    <TextField variant='outlined' label='Description'/>
    <br/>
    <br/>
    <TextField variant='outlined' label='Author Name'/>
    <br/>
    <br/>

    <Button variant='contained'>Submit</Button>
</div>
  )
}

export default Add