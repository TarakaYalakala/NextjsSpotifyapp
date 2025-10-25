"use client";

import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';
import iconmain from '../../../public/imgs/Whiteicon.jpg'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';

const Navbar = () => {
  return (
    <Box
    sx={{
      width:'100%'
    }}
    >
      {/* Icons */}

      <Box
      sx={{
        width:'auto',
        maxWidth:'120px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'8px'
      }}
      >

        {/* Icon-spotify */}

        <Box
        sx={{
          width:'auto',

        }}
        >
        <Image 
        src={iconmain}
        alt='MainIcon'
        width={50}
        height={35}
        className='object-cover'
        />
        

        </Box>

        {/* Icon-Home */}

        <Box
        sx={{
          backgroundColor:'#1d1d1d',
          width:'45px',
          height:'45px',
          borderRadius:'50%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
        >
         <HomeFilledIcon
         sx={{
          width:'30px',
          height:'30px'
         }}
         />


        </Box>

      </Box>


      
    </Box>
  )
}

export default Navbar