import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background:"cyan"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}align='left'><b>BLOG DASHBOARD</b></Typography>
                    <Button variant="contained" color="secondary"><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>HOME</Link></Button>
                    &nbsp;
                    <Button variant="contained" color="secondary" ><Link to = {'/Add'} style = {{textDecoration:"none",color:"white"}}>ADD BLOG</Link></Button>
                </Toolbar>

            </AppBar>
      
        </Box>
    </div>
  )
}

export default NavBar