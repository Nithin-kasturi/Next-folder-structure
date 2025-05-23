'use client'
import { useRouter } from "next/navigation";
import T from './topic';
export default function RemoveBtn({id}:any) {
  const router=useRouter();
  const removeTopic=async()=>{
    const confirmed=confirm("Are you sure");
    if(confirmed){
      const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,
        {
          method:"DELETE"
        }
      )
      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
      <button className="text-red-400" onClick={removeTopic}>Remove</button>
  )
}
