import { useState, useRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const carouselRef = useRef();
  
  // Carousel responsive config
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Technical Skills (for carousel)
  const [technicalSkills] = useState([
  { name: "Software QA", percentage: 90 },
  { name: "Jira", percentage: 95 },
  { name: "Playwright", percentage: 80 },
  { name: "K6", percentage: 80 },
  { name: "LoadRunner", percentage: 90 },
  { name: "Performance Testing", percentage: 90 },
  { name: "Google Workspace", percentage: 95 },
  { name: "Microsoft Office", percentage: 95 },
  { name: "Google Colab", percentage: 90 },
  { name: "OutSystems", percentage: 90 },
  { name: "diagrams.net", percentage: 95 },
  { name: "Visio", percentage: 85 },
  { name: "MySQL", percentage: 90 },
  { name: "C/C++", percentage: 95 },
  { name: "PHP", percentage: 85 },
  { name: "JavaScript", percentage: 95 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "ReactJS", percentage: 95 },
  { name: "Figma", percentage: 90 },
  { name: "System Analysis", percentage: 85 },
  { name: "UI/UX Design", percentage: 95 },
  { name: "Python", percentage: 95 },
  { name: "Node.js", percentage: 80 },
  { name: "Java", percentage: 90 },
  { name: "NLP", percentage: 95 },
  { name: "Deep Learning", percentage: 95 },
  ]);

  // Soft Skills
  const [softSkills] = useState([
    "Communication",
    "Problem Solving", 
    "Leadership",
    "Team Collaboration",
    "Attention to Detail",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Critical Thinking",
    "Work Ethic",
    "Analytical Thinking",
    "Project Management"
  ]);

  // Language Skills with certificate links
  const [languageSkills] = useState([
    { 
      name: "English", 
      level: "Fluent", 
      percentage: 95, 
      cert: "TOEIC 885/990",
      certLink: "https://drive.google.com/file/d/1H-zeN8zOQkY3fTBc1Uea0mf-nhHiaMoj/view?usp=sharing" // Add your TOEIC certificate link here
    },
    { 
      name: "Korean", 
      level: "Advanced", 
      percentage: 80, 
      cert: "TOPIK II Level 4/6, Score:163/300",
      certLink: "https://drive.google.com/file/d/11rr3QV7JDkHeSgHuhXtJqTtajN8rMbav/view?usp=sharing" // Add your TOPIK certificate link here
    },
    { 
      name: "Indonesian", 
      level: "Native", 
      percentage: 100 
    },
  ]);

  // Certifications with links
  const [certifications] = useState([
    { 
      name: "National University of Singapore - Product Innovation Challenge (Completion)",
      link: "https://badges.parchment.com/public/assertions/WCsIhWEiSK6cYMwD8lfWrQ?identity__email=naftacacakanaya@gmail.com" // Add link
    },
    { 
      name: "MasterClass Software Testing with Jira & Agile - QA Lead (Udemy)",
      link: "https://www.udemy.com/certificate/UC-7adaf328-935a-45c5-b02f-1393381e74f5/" // Add link
    },
    { 
      name: "Data Science Fundamentals Specialization - University of California Irvine (Coursera)",
      link: "https://coursera.org/share/d5e2a15164c71645ef80ac7f32a88791" // Add link
    },
    { 
      name: "IBM Deep Learning with PyTorch, Keras & Tensorflow Professional Certificate",
      link: "https://coursera.org/share/e48ad4555110c0f965933f50c845c2a7" // Add link
    },
    { 
      name: "Microsoft AI & ML Engineering Professional Certificate",
      link: "https://coursera.org/share/695c7c1b14f7f4821575db19f2699043" // Add link
    },
    { 
      name: "IBM AI Developer Professional Certificate (Coursera Completion)",
      link: "https://coursera.org/share/83147613b5f799f5b7a4807aa9284269" // Add link
    },
    { 
      name: "Natural Language Processing Specialization by DeepLearning.AI (Coursera Completion)",
      link: "https://coursera.org/share/5e6d873b301ffd807f9adc0f118e9535" // Add link
    }
  ]);

  // Function to calculate gradient color
  const getGradientColor = (percentage) => {
    const color1 = { r: 251, g: 158, b: 189 }; // #fb9ebd
    const color2 = { r: 13, g: 16, b: 47 };    // #0D102F
    const ratio = percentage / 100;
    const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
    const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
    const b = Math.round(color1.b + (color2.b - color1.b) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Carousel navigation functions
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills & Certifications</h2>
              <p>A comprehensive overview of my technical expertise, soft skills, language proficiency, and professional certifications.</p>

              {/* SECTION 1: TECHNICAL SKILLS */}
              <div className="skill-section">
                <h3 className="section-title">Technical Skills</h3>
                <p className="section-subtitle">Proficient in software quality assurance, performance testing, and full-stack development.</p>
                
                {/* Custom arrow container */}
                <div className="arrow-container">
                  <button className="custom-arrow-btn arrow-left" onClick={prevSlide}>
                    ←
                  </button>
                  <button className="custom-arrow-btn arrow-right" onClick={nextSlide}>
                    →
                  </button>
                </div>
                
                <Carousel 
                  ref={carouselRef}
                  responsive={responsive} 
                  infinite={true}
                  className="skill-slider"
                  arrows={false} // Disable default arrows
                  showDots={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  {technicalSkills.map((skill, index) => {
                    const gradientColor = getGradientColor(skill.percentage);
                    return (
                      <div className="item" key={index}>
                        <div className="pie-chart">
                          <div className="chart-inner">
                            <div 
                              className="chart-fill"
                              style={{
                                background: `conic-gradient(${gradientColor} 0% ${skill.percentage}%, #eee ${skill.percentage}% 100%)`
                              }}
                            ></div>
                            <div className="chart-center">
                              <span className="percentage">{skill.percentage}%</span>
                            </div>
                          </div>
                        </div>
                        <h5>{skill.name}</h5>
                      </div>
                    );
                  })}
                </Carousel>
              </div>

              {/* SECTION 2: SOFT SKILLS */}
              <div className="skill-section soft-skills-section">
                <h3 className="section-title">Soft Skills</h3>
                <p className="section-subtitle">Interpersonal and professional attributes that enhance collaboration and productivity.</p>
                
                <div className="soft-skills-container">
                  {softSkills.map((skill, index) => (
                    <div className="soft-skill-item" key={index}>
                      <div className="soft-skill-icon">✓</div>
                      <span className="soft-skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: LANGUAGE SKILLS - Clickable certificates */}
              <div className="skill-section language-section">
                <h3 className="section-title">Language Skills</h3>
                <p className="section-subtitle">Proficiency in multiple languages for effective global communication.</p>
                
                <div className="languages-container">
                  {languageSkills.map((language, index) => (
                    <div className="language-item" key={index}>
                      <div className="language-header">
                        <span className="language-name">{language.name}</span>
                        <span className="language-level">{language.level}</span>
                      </div>
                      {language.cert && (
                        <div className="language-cert">
                          {language.certLink ? (
                            <a 
                              href={language.certLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="certificate-link"
                            >
                              {language.cert} 🔗
                            </a>
                          ) : (
                            language.cert
                          )}
                        </div>
                      )}
                      <div className="language-progress-bar">
                        <div 
                          className="language-progress-fill"
                          style={{ 
                            width: `${language.percentage}%`,
                            background: getGradientColor(language.percentage)
                          }}
                        ></div>
                        <span className="language-percentage">{language.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* SECTION 4: CERTIFICATIONS - Clickable */}
              <div className="skill-section certifications-section">
                <h3 className="section-title">Certifications</h3>
                <p className="section-subtitle">Professional certifications and completed courses.</p>
                
                <div className="certifications-container">
                  {certifications.map((cert, index) => (
                    <a 
                      key={index}
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-item-link"
                    >
                      <div className="certification-item">
                        <div className="certification-badge">
                          <div className="badge-icon">🎓</div>
                        </div>
                        <div className="certification-content">
                          <p className="certification-text">
                            {cert.name} 
                            <span className="link-indicator">🔗</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};