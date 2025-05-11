
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import T from "./topic";
const getTopics=async()=>{
    try {
      const res= await fetch('http://localhost:3000/api/topics',{
        cache:'no-store'
      })
      if(!res.ok){
        throw new Error("Failed to fetch");
      }
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }
export default async function  TopicsList() {
  const {topics}=await getTopics();
  return (
    <div>
      {
        topics.map((topic:T)=>(
        
        <div key={topic._id}>
        <div>
            <h2>{topic.title}</h2>
            <div>{topic.desc}</div>
        </div>
        <div>
            <RemoveBtn id={topic._id}/>
            <button>
              <Link href={`/editTopic/${topic._id}`}>Edit topuc</Link>
            </button>
        </div>
        </div>
        ))
      }
        
    </div>
  )
}
