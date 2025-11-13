import React from 'react';
import { certificateData } from './certificateData';
import '../../styles/certificate.css';

const CertificateSection: React.FC = () => (
  <section className="certificate-section">
    <h2 className="section-title">Certificates</h2>
    <div className="certificate-list">
      {certificateData.map((cert, idx) => (
        <div className="certificate-card" key={idx}>
          <h3 className="cert-title">{cert.name}</h3>
          <p className="cert-provider">{cert.provider} &mdash; {cert.year}</p>
          <a className="cert-link" href={cert.url} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default CertificateSection;
