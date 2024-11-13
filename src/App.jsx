import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("olive")

  return (
    <div className='w-full h-screen bg-olive'  style={{backgroundColor:color}}>
     <div className='flex bg-white items-center justify-center px-3 py-2 rounded-full  gap-7'>
      <button onClick={()=>setColor("red")} className=' text-white px-2 py-1 rounded-full shadow-black  ' style={{backgroundColor:"red"}}>red</button>
      <button onClick={()=>setColor("green")} className=' text-white px-2 py-1 rounded-full shadow-black'style={{backgroundColor:'green'}}>Green</button>
      <button onClick={()=>setColor("blue")} className=' text-white px-2 py-1 rounded-full shadow-black'style={{backgroundColor:'blue'}}>Blue</button>
      <button onClick={()=>setColor("pink")} className=' text-white px-2 py-1 rounded-full shadow-xl'style={{backgroundColor:'pink'}}>Pink</button>
      <button onClick={()=>setColor("black")} className=' text-white px-2 py-1 rounded-full shadow-black'style={{backgroundColor:'black'}}>Black</button>
      <button onClick={()=>setColor("white")} className=' px-2 py-1 rounded-full text-black shadow-black'style={{backgroundColor:'white'}}>White</button>
      <button onClick={()=>setColor("yellow")} className=' px-2 py-1 rounded-full text-black shadow-black'style={{backgroundColor:'yellow'}}>Yellow</button>
     </div>

    </div>
  )
}

export default App