import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/features/usersSlice'

const Users = () => {
  const dispatch = useDispatch()
  const listUser = useSelector((state)=>state.users.entities)
  console.log("listUser", listUser)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <section className='space-y-4 max-h-[20rem] overflow-y-scroll'>
      <button className='bg-green-700 text-white rounded-md min-w-[10rem] py-2'>Back to Home</button>
      <table className="w-full text-sm text-left text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
              </tr>
          </thead>
          <tbody>
            {
              listUser.map((user,i)=>(
                <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {i}
                    </th>
                    <td className="px-6 py-4">
                        {user?.name}
                    </td>
                    <td className="px-6 py-4">
                        {user?.username}
                    </td>
                    <td className="px-6 py-4">
                        {user?.email}
                    </td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </section>
  )
}

export default Users