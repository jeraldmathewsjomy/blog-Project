import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setUsers(response.data);
            console.log(response.data)
        })
        .catch(err=>console.log(err))
    },[])
   
  return (
    <div>
         <TableContainer component={Paper} elevation={3} sx={{maxWidth:2000,margin:'20 auto',}}>
        <Table>
            <TableHead>
                <TableRow>
                    
                    <TableCell style={{color:"purple"}}><b>ID</b></TableCell>
                    <TableCell style={{color:"purple"}}><b>TITLE</b></TableCell>


                </TableRow>


            </TableHead>

            <TableBody>
                
                {
                 users.map((val,index)=>{
                     return(
                         <TableRow key={index}>
                             <TableCell>{val.id}</TableCell>
                             <TableCell>{val.title}</TableCell>
                             
                         </TableRow>
                     )
                 })
                }
              </TableBody>
            </Table>
            </TableContainer>
            
</div>
  )
}

export default Home