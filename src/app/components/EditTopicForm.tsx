'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";
export default function EditTopicForm({id,title,desc}:any) {
  const [newTitle,setNewTitle]=useState(title);
  const [newDesc,setNewDesc]=useState(desc);
  const router=useRouter();
  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    try {
      const res=await fetch(`http://localhost:3000/api/topics/${id}`,
      {
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({newTitle,newDesc}),
      }
    )
    if(!res.ok){
      throw new Error("Failed to update topic")
    }
    router.push("/")
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div>
      <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Topic Tittle"
        value={newTitle}
        onChange={(e)=>setNewTitle(e.target.value)}
        />
        <input type="text" placeholder="Topic Description"
        value={newDesc}
        onChange={(e)=>setNewDesc(e.target.value)}
        />
        <button className="text-white bg-green-400">Update topic</button>
      </form>
    </div>
    </div>
  )
}
