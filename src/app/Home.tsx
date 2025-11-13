import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import '../styles/Home.css'
import AnimationShort from '../animation/AnimationShort'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Client, { urlFor } from '../sanityClient';

interface IntroData {
  name:any;
  description:string;
  imageUrl:any;
  discordlink:any;
}

const ProfessionArray = ['Software Developer', 'Data Scientist', 'Blogger'];

const Home: React.FC = (): JSX.Element => {

  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [intro, setIntro] = useState<IntroData | null>(null);

  const handleUserIntro = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await Client.fetch(`*[_type == 'intro'] | order(queueOrder asc)`);
      if (response && response.length > 0) {
        setIntro(response[0]); // Set first item as single object
      } else {
        setError("No intro data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load content. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % ProfessionArray.length);
    }, 2000);

    handleUserIntro();
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="loading-container">Loading...</div>;
  if (error) return <div className="error-container">{error}</div>;
  if (!intro) return <div className="intro-wrapper">No Intro Available</div>;

  return (
    <Layout>
      <AnimationShort>
        <div>
          <div className="home-container">

            <section className='intro-wrapper'>

              <figcaption className='caption'>
                <div className='h-1'>Hello</div>
                <div className='h-2'>I'm {intro.name}</div>
                <div className='h-3'>
                  {ProfessionArray[counter]}, Mumbai
                  </div>
              </figcaption>

              <blockquote className='intro'>
                <p className='para-1'>
                  {intro.description}
                </p>
              </blockquote>

              <button className='btn-container-1'>
                <Link className='btn-1' to={intro.discordlink} target = '_blank'>Join Discord Server</Link>
              </button>

            </section>

            <figure className='image-container'>
              <img src={urlFor(intro.imageUrl)} alt="Developer's image" className='dev-image'/>
            </figure>

          </div>
          <div>
            <div id="about" style={{ marginTop: '6rem' }}>
            <About />
          </div>
          <div id="contact" style={{ marginTop: '6rem' }}>
            <Contact />
          </div>
          </div>
        </div>

      </AnimationShort>
    </Layout>
  )
}

export default Home
