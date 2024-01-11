import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
       <div className='mt-5 p-5 bg-info d-flex justify-content-center' >
        <Link className='btn btn-primary mt=-5 me-3 ' href="/student/signin">SignIn</Link>
        <Link className='btn btn-success mt=-5 ' href="/student/signup">SignUp</Link>
       </div>
    </>
  )
}

export default page