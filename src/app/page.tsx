'use client'
import React, { useState } from 'react';

export default function Home() {

  const [listValue,setListValue]=useState<string>("")
  const [array,setArray]=useState<string[]>([])
  function handle(e: React.FormEvent<HTMLInputElement>)
  {
      setListValue(e.currentTarget.value)
  }

  function handleKeywordKeyPress()
  {
    setArray((prevArray)=>[...prevArray , listValue])
    setListValue("");
  }



  return (
    <main className="flex min-h-screen flex-col">
        <input type='text' placeholder='search' onChange={(e)=>handle(e)} value={listValue}/>
        <button onClick={handleKeywordKeyPress}>Click</button>
        {
          array.map((item,index)=>{
            return(
              <div key={index}>
                <h1>{item}<span><button style={{background:'yellow'}}>Edit</button></span><span><button style={{background:'red'}}>delete</button></span></h1>
              </div>
            )
          })
        }
        
        </main>

  )
}
