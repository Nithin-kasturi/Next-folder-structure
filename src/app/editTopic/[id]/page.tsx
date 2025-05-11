import EditTopicForm from '@/app/components/EditTopicForm'
import React from 'react'
const getTopicByID=async(id:any)=>{
    try {
      const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:'no-store'
    })
    if(!res.ok){
      throw new Error("Failed to fetch id")
    }
    return res.json()
    } catch (error) {
      console.log(error)
    }
    
  }
export default async function  EditTopic ({params}:any) {
  const {id}=params;
  const {topic}=await getTopicByID(id);
  const {title,desc}=topic
  return (
    <div className='mt-5'>
      <EditTopicForm id={id} title={title} desc={desc}/>
    </div>
  )
}
