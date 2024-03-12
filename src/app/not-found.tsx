import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div style={{width:"100%",margin:"auto",height:"50vh", display:"flex",justifyContent:"center",flexDirection:"column"}} className=''>
      <h2 className='mt-6 text-pink-500 mx-auto text-center text-4xl font-bold'>Not Found</h2>
      <p className='text-pink-500 font-bold text-center mt-6' >Not able to find resources that you are looking</p>
     <Link href={"/"} className='text-pink-500 font-bold text-2xl mt-3 mx-auto'>Go To Home Page</Link>
    </div>
  )
}

export default notFound
