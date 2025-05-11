'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function AddTopic() {
  console.log('hi') //displays in console in web page 
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const router=useRouter();
  const  handleSubmit =async(e:any)=>{
    e.preventDefault();
    if(!title || !desc){
      alert('Title and desc are required');
      return;
    }
    try {
      const res=await fetch('http://localhost:3000/api/topics/',
        {
          method: "POST",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify({title,desc})
        }

      )
      if(res.ok){
        router.push('/')
      }
      else{
        throw new Error("Error occured")
      }
    } catch (error) {
      console.log(error)
    }
  }
   return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Topic Tittle"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input type="text" placeholder="Topic Description"
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
        />
        <button className="text-white bg-green-400">Add topic</button>
      </form>
    </div>
  )
}
