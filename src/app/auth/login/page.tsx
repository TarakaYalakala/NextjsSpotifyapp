"use client"

import React from 'react'
import {Button} from '@mui/material'
import { supabase } from '@/app/utils/SupabaseSchema'



function page() {


  const hangleLoginWithGoogle = async () => {

    const {data,error} = await supabase.auth.signInWithOAuth({
      provider:"google",
      options:{
        redirectTo:"http://localhost:3000/about"
      }
    })

    if (error) {
       console.log('Error is ',error);
       
    }

    console.log('data is ',data);
    



  }


  return (
    <div className='m-10'>
      <Button
      sx={{
        color:'black',
        backgroundColor:'white',
        textAlign:'center',
        padding:'30px'

      }}

      onClick={hangleLoginWithGoogle}


      >
        Login With Google..

      </Button>
    </div>
  )
}

export default page
