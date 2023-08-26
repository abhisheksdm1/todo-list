'use client'
import React, { useState } from 'react';

export default function Home() {

  const [listValue,setListValue]=useState<string>("")
  const [listArray,setListArray]=useState<string[]>([])
  function handle(e: React.FormEvent<HTMLInputElement>)
  {
      setListValue(()=>(e.currentTarget.value))
  }

  function handleKeywordKeyPress()
  {
    setListArray((prevArray)=>[...prevArray , listValue])
    setListValue("");
  }

  function deleteHandler(index:number)
  {
    const deletedList=[...listArray]
    // deletedList.splice(index, 1);
    delete deletedList[index];
    setListArray(deletedList);
  }

  
  return (
    <main className="flex min-h-screen flex-col">
        <input type='text' placeholder='search' onChange={(e)=>handle(e)} value={listValue}/>
        <button onClick={handleKeywordKeyPress}>Click</button>
        {
          listArray.map((item,index)=>{
            return(
              <div key={index}>
                <h1>{item}<span><button style={{background:'yellow'}} >Edit</button></span><span><button onClick={()=>deleteHandler(index)} style={{background:'red'}}>delete</button></span></h1>
              </div>
            )
          })
        }
        
        </main>

  )
}
