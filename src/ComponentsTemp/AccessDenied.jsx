import { Link } from 'react-router-dom'
import './all.css'
import { FaHome } from "react-icons/fa";


const AccessDenied = () => {
 
  return (
   
      <div className='flex justify-center items-center mx-auto text-center '>
<div>
<h1 className='text-2xl p-2 font-bold text-red-600/70'>You don&apos;t have permission to this page</h1>
<p className='text-xl p-2 font-bold flex justify-center items-center'>Back to <Link to={"/"} className='text-xl p-2 font-bold text-blue-600/70'><FaHome/></Link></p>
    

    <div className=''>
    <img className=' rounded-md  w-full lg:h-auto' src="/src/assets/access-denied.jpg" alt="" />
    </div>
  
</div>
    </div>
   
  )
}

export default AccessDenied