import React, { useEffect } from 'react'
import '../styles/components/NotFoundPage.css'
import { useNavigate } from 'react-router-dom'

const NotFoundPage:React.FC = ():JSX.Element => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>navigate("/",{replace:true}),3000);
    },[]);

  return (
    <div className='notfound-wrapper'>
      <h1 className='found-not'>Page Not Found</h1>
      <p className='pp'>redirecting...</p>
    </div>
  ) 
}

export default NotFoundPage
