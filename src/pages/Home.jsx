import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-200 p-5 flex flex-col gap-4'>
      <h1 className='font-bold text-[2rem]'>Why do we need Test?</h1>
      <p>
        To guarateee our code quality. And to show the people that we also care about it and wish to give 
        something that already, at least by ourself
      </p>
      <button onClick={()=>navigate("/users")} className='w-[8rem] bg-sky-600 py-2 px-4 rounded-md text-white'>User Lists</button>
    </div>
  )
}

export default Home