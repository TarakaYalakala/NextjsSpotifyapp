"use client";


import React from 'react'
import {Box,Button} from '@mui/material'
import Navbar from './components/Navbar';
import TaskHandler from './components/TaskHandler';
import { useEffect } from 'react';


function page() {
  return (
    <Box 
    sx={{
      width:'100%'
    }}
    >
      <Navbar/>
      <br />
      <TaskHandler/>

      <Button>Google Auth0 login</Button>
    </Box>
  )
}

export default page