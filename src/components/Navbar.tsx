import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Navbar.css'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar:React.FC = ():JSX.Element => {

    const [closeMiniNav,setCloseMiniNav] = useState<boolean>(false);

    const handleOpenMiniNav = (e:any) =>{
        e.preventDefault();
        setCloseMiniNav(prev => !prev);
    }

    const scrollToHeight = (height: number) => {
        window.scrollTo({
        top: height,
        behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
        });
    };

  return (
    <nav className='navbar-wrapper'>
        <section className='header'>
            <h1 className='title'><span>A</span>ditya <span>P</span>rajapati</h1>
            {/* <h1 className='title'>Aditya Prajapati</h1> */}
        </section>

        <section className='link-wrapper'>
            <ol className='links'>
                <li><button onClick={() => scrollToHeight(0)} className='link'>Home</button></li>
                <li><button onClick={() => scrollToHeight(600)} className='link'>Projects</button></li>
                <li><button onClick={() => scrollToHeight(1260)} className='link'>Skills</button></li>
                <li><button onClick={scrollToBottom} className='link'>Contact</button></li>
                <li><a href={'https://drive.google.com/file/d/1Op_gmjW2lvGSDq5dhTmJhXgf5nNagYsD/view?usp=drive_link'} className='link' download={true} target='_blank'>Resume</a></li>
                <div className='icon-links'>
                    <li><Link to={"https://x.com/AryamanPra92724"} target='_blank'><XIcon style={{width:'1rem',marginLeft:'1rem'}} className='icon'/></Link></li>
                    <li><Link to={"https://github.com/adityaprajapati2003"} target='_blank'><GitHubIcon style={{width:'1.2rem'}} className='icon'/></Link></li>
                    <li><Link to={"https://www.linkedin.com/in/aditya-prajapati-ab178433a/"} target='_blank'><LinkedInIcon style={{width:'1.2em'}} className='icon'/></Link></li>
                </div>
            </ol>
        </section>

        <div className='menu-icon' onClick={handleOpenMiniNav}><MenuIcon className='icon-menu'/></div>

       {
        closeMiniNav ?  
            <section className='hidden-wrapper'>
            
                <div onClick={handleOpenMiniNav} className='close-div'>
                    <CloseIcon className='icon-close'/>
                </div>

                <ol className='hidden-links'>
                    <li><button onClick={() => scrollToHeight(0)} className='link-h'>Home</button></li>
                    <li><button onClick={() => scrollToHeight(920)} className='link-h'>Projects</button></li>
                    <li><button onClick={() => scrollToHeight(2320)} className='link-h'>Skills</button></li>
                    <li><button onClick={scrollToBottom} className='link-h'>Contact</button></li>
                    <li><a href={'https://drive.google.com/file/d/1Op_gmjW2lvGSDq5dhTmJhXgf5nNagYsD/view?usp=drive_link'} className='link-h' download={true}>Resume</a></li>
                </ol>
            </section>:""
       }
    </nav>
  )
}

export default Navbar
