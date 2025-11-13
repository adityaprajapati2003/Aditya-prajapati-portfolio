import React, { useEffect, useState } from 'react'
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import XIcon from '@mui/icons-material/X';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

const Contact:React.FC = ():JSX.Element => {

    const [result,setResult] = useState<string | null>(null);

    const onSubmit = async(e:any)=>{
        e.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(e.target);
        formData.append('access_key','8ba38031-ffda-4878-9796-64ee41a980d7');

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setResult(null);
        },2000)
    },[result]);

  return (
    <div className='contact-container'>

        <section className="connect">
            <h1 className="connect-title">
                Connect with me
            </h1>

            {/* <div className='email-container'>
                <AlternateEmailIcon className='icon-e'/>
                <a href="mailto:adityaprajapati2901@gmail.com" className='email'>adityaprajapati2901@gmail.com</a>
            </div> */}


            {/* <div>
                <Link to={"https://x.com/Beyond_Aditya"}><XIcon className='icon-2'/></Link>
                <Link to={"https://github.com/adityaprajapati2901cukoobi"}><GitHubIcon className='icon-2'/></Link>
                <Link to={"https://www.linkedin.com/in/aditya-prajapati-bbb64025a/"}><LinkedInIcon className='icon-2'/></Link>
            </div> */}

            <button className='btn-container-1'>
                <Link className='btn-1' to={`https://github.com/adityaprajapati2003`}>GitHub</Link>
            </button>
            <button className='btn-container-1'>
                <Link className='btn-1' to={`https://www.linkedin.com/in/aditya-prajapati-ab178433a/`}>LinkedIn</Link>
            </button>
            <button className='btn-container-1'>
                <Link className='btn-1' to={`https://hashnode.com/@adityaaditya11`}>My Bloggs</Link>
            </button>

        </section>

        <section className="contact">
            <h1 className='title-c'>Contact me</h1>
            <form onSubmit={onSubmit} className='form'>
                <input type="hidden" name="access_key" value="8ba38031-ffda-4878-9796-64ee41a980d7"/>
                <input type="text" name="name" placeholder='Your name' className='text' required/>
                <input type="email" name="email" placeholder='Your email' className='text' required/>
                <textarea name="message" placeholder='message' className='super-text' required></textarea>

                <button type="submit" className='submit'>Send Message</button>
            </form>
            <p>{result}</p>
        </section>

    </div>
  )
}

export default Contact
