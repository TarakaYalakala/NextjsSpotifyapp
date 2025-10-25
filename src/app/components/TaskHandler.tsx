"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { supabase } from "../utils/SupabaseSchema";
import { useEffect } from "react";



interface todo {
    id:number;
    Title: string;
  description: string;
}

function TaskHandler() {
  const [Tasks, setTasks] = useState({ Title: "", description: "" });
  const [Taskarr, setTaskarr] = useState<todo[]>([]);

  // Fetch data //

  const handlegetTasks = async () => {
    const { error, data } = await supabase
      .from("Tasks")
      .select("*")
      .order("created_at", { ascending: false });
    console.log("Fetched data is :", data);
    setTaskarr(data);

    if (error) {
      console.log(error);
    }
  };

  // Post data //

  const handlepostTasks = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(Tasks);
    setTaskarr((prev) => [...prev,Tasks]);
    console.log(Taskarr);
    setTasks({
        Title:"",
        description:""
    })

    const { error, data } = await supabase.from("Tasks").insert([
      {
        Title: Tasks.Title,
        description: Tasks.description,
      },
    ]);

    if (error) {
      console.log("Error in POST is", error);
    }

    console.log(data);
  };

  const handleDelete = async (id:number)  => {
     const {error} = await supabase.from("Tasks").delete().eq('id',id);

     if (error) {
      console.log("Error in delete");
     }
     else{
      setTaskarr((prev) => prev.filter((task) => task.id !== id));
      
     }
  }

  useEffect(() => {
    handlegetTasks();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth:'500px',
        margin: "0px auto",
       
      }}
    >
      <Box
        sx={{
          border: "0.5px solid white",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            marginBottom: "20px",
            gap: "10px",
          }}
        >
          <input
            type="text"
            className="bg-emerald-900 border-[1px] border-b-cyan-500 p-5"
            placeholder="Enter Task Title"
            value={Tasks.Title}
            onChange={(e) =>
              setTasks((prev) => ({ ...prev, Title: e.target.value }))
            }
          />
          <br />
          <input
            type="text"
            className="bg-emerald-900 border-[1px] border-b-cyan-500 p-5"
            placeholder="Enter Task discription"
            value={Tasks.description}
            onChange={(e) =>
              setTasks((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </Box>

        <Box>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={handlepostTasks}
          >
            Add
          </Button>
        </Box>
      </Box>
      {/* Mapping data */}

        {
            Taskarr.map((item,id) => {
                return (
                     <Box
          sx={{
            border:'0.5px solid white',
            padding:'10px'
          }}
          key={id}
          >
            <Box
            sx={{
                fontSize:'20px'
            }}
            >
                {item.Title}
            </Box>

            <Box>
                {item.description}
            </Box>

            <Button
            sx={{
                color:'black',
                backgroundColor:'white'
            }}
            onClick={() => handleDelete(item.id)}
            >
                Delete
            </Button>
          </Box>
                )
            }) 
         

        }


    </Box>
  );
}

export default TaskHandler;
