import React, { useEffect, useState } from 'react'
import '../styles/components/Skill.css'
import Client from '../sanityClient';

interface SkillArray {
  name:string,
  link:string,
}

const Skill:React.FC = ():JSX.Element => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [skillList , setSkillList] = useState<SkillArray[] | null>(null);

  const handleSkillContent = async ()=>{
    setLoading(true);
    try {
      const response = await Client.fetch(`*[_type == 'resource']`);
      if(response){
        setSkillList(response);
        setLoading(false);
        return;
      }

      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      return;
    }
  }

  useEffect(()=>{
    handleSkillContent();
  },[]);

  return (
    <div className='skill-container'>
      {
        loading ? <div>Loading...</div> : skillList && skillList.map((skill,index)=>(
          <section className="skill-wrapper" key={index}>
            <h1 className='skill-name'>{skill.name}</h1>
          </section>
        ))}
    </div>
  )
}

export default Skill
