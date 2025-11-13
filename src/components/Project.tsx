import React, { useEffect, useState } from 'react';
import '../styles/components/Project.css';
import Client, { urlFor } from '../sanityClient';

interface ProjectArray {
  title: string;
  description: string;
  imageUrl: any;
  live: boolean;
  liveUrl: string;
  github: boolean;
  gitHubUrl: string;
}

const Project: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectArray[] | null>(null);

  const handleUserContent = async () => {
    setLoading(true);
    try {
      const response = await Client.fetch(`*[_type == 'project'] | order(queueOrder asc)`);
      setProjects(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleUserContent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!projects || projects.length === 0)
    return <div className="project-wrapper">No projects available</div>;

  return (
    <div className="project-wrapper">
      {projects.map((item, index) => (
        <article className="card-container" key={index}>
          <section className="figure">
            <img src={urlFor(item.imageUrl)} alt={item.title} className="project-image" />
          </section>

          <section className="interact">
            <figcaption className="caption">
              <p className="desc">{item.description}</p>
            </figcaption>

            <div className="btn-container">
              {item.live && (
                <button className="live-btn">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-k"
                  >
                    Live
                  </a>
                </button>
              )}
              {item.github && (
                <button className="git-btn">
                  <a
                    href={item.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-l"
                  >
                    Git repo
                  </a>
                </button>
              )}
            </div>
          </section>
        </article>
      ))}
    </div>
  );
};

export default Project;
