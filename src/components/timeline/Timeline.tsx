import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';
import { EducationItem, ExperienceItem } from './timeline.types';
import { educationData, experienceData } from './timelineData';
import '../../styles/Timeline.css';

const ICON_STYLE = {
  education: { background: '#36454F', color: '#fff' },
  experience: { background: '#36454F', color: '#fff' }
};

const CONTENT_STYLE = {
  background: 'rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '10px',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)'
};

const Timeline: React.FC = () => {
  const renderEducation = (item: EducationItem, index: number) => (
    <VerticalTimelineElement
      key={`edu-${index}`}
      date={item.duration}
      iconStyle={ICON_STYLE.education}
      icon={React.createElement(FaGraduationCap)}
      contentStyle={{ ...CONTENT_STYLE, borderTop: '3px solid #36454F' }}
    >
      <h3 className="timeline-title">{item.degree}</h3>
      <h4 className="timeline-subtitle">{item.institution}</h4>
      {item.cgpa && <p className="timeline-cgpa">{item.cgpa}</p>}
      {item.description && <p className="timeline-description">{item.description}</p>}
    </VerticalTimelineElement>
  );

  const renderExperience = (item: ExperienceItem, index: number) => {
    const Icon = item.type === 'internship' ? FaBriefcase : FaUsers;
    
    return (
      <VerticalTimelineElement
        key={`exp-${index}`}
        date={item.duration}
        iconStyle={ICON_STYLE.experience}
        icon={React.createElement(Icon)}
        contentStyle={{ ...CONTENT_STYLE, borderTop: '3px solid #36454F' }}
      >
        <h3 className="timeline-title">{item.title}</h3>
        <h4 className="timeline-subtitle">{item.company}</h4>
        {item.points && (
          <ul className="timeline-points">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </VerticalTimelineElement>
    );
  };

  return (
    <div className="timeline-container">
      <section className="timeline-section">
        <h2 className="section-title">Education</h2>
        <VerticalTimeline lineColor="#494444ff">
          {educationData.map(renderEducation)}
        </VerticalTimeline>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">Internship/Volunteer Experience</h2>
        <VerticalTimeline lineColor="#494444ff">
          {experienceData.map(renderExperience)}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline;
