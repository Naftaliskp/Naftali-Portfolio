import { Accordion, Row, Col, Tab, Nav } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp, FaFileAlt, FaPlay, FaFigma, FaGoogleDrive } from "react-icons/fa";
import { useState } from "react";

export const ProjectCard = ({ 
  title, 
  description, 
  imgUrl, 
  link, 
  github, 
  report,
  // Design project links - updated to handle multiple link types
  designLink,
  figmaLink,
  reportLink,
  prototypeLink,
  gdriveLink,
  fullDescription, 
  technologies, 
  overviews, 
  workflows,
  results,
  projectStats,
  projectType = "website" // Default to website type
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Function to determine which links to show based on project type
  const getAvailableLinks = () => {
    const links = [];
    
    if (projectType === "website") {
      if (link) links.push({ type: 'demo', url: link, label: 'Live Demo', icon: <FaPlay /> });
      if (github) links.push({ type: 'github', url: github, label: 'View Code', icon: <FaGithub /> });
    }
    
    if (projectType === "ai-iot") {
      if (github) links.push({ type: 'github', url: github, label: 'View Code', icon: <FaGithub /> });
      if (report) links.push({ type: 'report', url: report, label: 'View Report', icon: <FaFileAlt /> });
    }
    
    if (projectType === "design") {
      // Handle legacy single designLink
      if (designLink && !figmaLink && !reportLink && !prototypeLink && !gdriveLink) {
        const isFigma = designLink.includes('figma.com');
        const label = isFigma ? 'View in Figma' : 'View in Google Drive';
        const icon = isFigma ? <FaFigma /> : <FaGoogleDrive />;
        links.push({ type: 'design', url: designLink, label, icon });
      }
      
      // Handle new 3-link system for design projects
      if (figmaLink) links.push({ type: 'figma', url: figmaLink, label: 'Figma Design', icon: <FaFigma /> });
      if (reportLink) links.push({ type: 'report', url: reportLink, label: 'View Report', icon: <FaFileAlt /> });
      if (prototypeLink) links.push({ type: 'prototype', url: prototypeLink, label: 'Interactive Prototype', icon: <FaPlay /> });
      
      // Handle Google Drive only for graphic projects
      if (gdriveLink && !figmaLink && !reportLink && !prototypeLink) {
        links.push({ type: 'gdrive', url: gdriveLink, label: 'View in Google Drive', icon: <FaGoogleDrive /> });
      }
    }
    
    return links;
  };

  const availableLinks = getAvailableLinks();

  // Function to get primary link for image hover
  const getPrimaryLink = () => {
    if (projectType === "website") return link || github;
    if (projectType === "ai-iot") return report || github;
    if (projectType === "design") {
      return figmaLink || gdriveLink || designLink || reportLink || prototypeLink;
    }
    return "#";
  };

  // Function to get hover text for image
  const getHoverText = () => {
    if (projectType === "website") return "View Demo";
    if (projectType === "ai-iot") return "View Report";
    if (projectType === "design") {
      if (prototypeLink) return "View Prototype";
      if (figmaLink) return "View in Figma";
      if (gdriveLink) return "View in Drive";
      if (designLink) return designLink.includes('figma.com') ? "View in Figma" : "View in Drive";
      if (reportLink) return "View Report";
    }
    return "View Details";
  };

  return (
    <Accordion className="project-accordion-vertical mb-4" defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <div className="project-row-wrapper">
          {/* Project Row (Visible when collapsed) */}
          <div className="project-row">
            <Row className="align-items-center">
              {/* Project Image Card with Visit Website in hover */}
              <Col md={3}>
                <div className="project-image-card">
                  <a 
                    href={getPrimaryLink() || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="image-link-wrapper"
                  >
                    <div className="proj-imgbx">
                      <img src={imgUrl} alt={title} />
                      <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>
                          {projectType === "website" ? "Web Development" : 
                           projectType === "ai-iot" ? "AI/IoT Project" : 
                           "UI/UX Design"}
                        </span>
                        <div className="visit-indicator">
                          <FaExternalLinkAlt /> 
                          {getHoverText()}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>

              {/* Title and Justified Description */}
              <Col md={6}>
                <div className="project-info">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-description justify-text">
                    {description.length > 200 ? description.substring(0, 200) + "..." : description}
                  </p>
                </div>
              </Col>

              {/* Dropdown Button */}
              <Col md={3}>
                <div className="dropdown-section">
                  <Accordion.Header 
                    className="dropdown-btn"
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  >
                    <div className="dropdown-content">
                      <span>{isAccordionOpen ? "Close Details" : "View Details"}</span>
                      {isAccordionOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </Accordion.Header>
                </div>
              </Col>
            </Row>
          </div>

          {/* Accordion Body (Expanded Details) */}
          <Accordion.Body className="project-details-expanded">
            {/* Scrollable Container - Only this container scrolls */}
            <div className="scrollable-project-content">
              <Row>
                <Col lg={8}>
                  <Tab.Container defaultActiveKey="description">
                    <Nav variant="tabs" className="mb-4 project-detail-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="description">
                          {projectType === "design" ? "Project Description" : 
                           projectType === "ai-iot" ? "Description & Tech" : 
                           "Project Description"}
                        </Nav.Link>
                      </Nav.Item>
                      
                      {/* For Design projects */}
                      {projectType === "design" && overviews && (
                        <Nav.Item>
                          <Nav.Link eventKey="overview">Project Overview</Nav.Link>
                        </Nav.Item>
                      )}
                      
                      {/* For Design projects */}
                      {projectType === "design" && results && (
                        <Nav.Item>
                          <Nav.Link eventKey="results">Results & Designs</Nav.Link>
                        </Nav.Item>
                      )}
                      
                      {/* For AI/IoT projects */}
                      {projectType === "ai-iot" && workflows && (
                        <Nav.Item>
                          <Nav.Link eventKey="workflow">Project Workflow</Nav.Link>
                        </Nav.Item>
                      )}
                      
                      {/* For AI/IoT projects */}
                      {projectType === "ai-iot" && results && (
                        <Nav.Item>
                          <Nav.Link eventKey="results">Results & Output</Nav.Link>
                        </Nav.Item>
                      )}
                      
                      {/* For Website projects (non-AI/IoT) */}
                      {projectType === "website" && overviews && (
                        <Nav.Item>
                          <Nav.Link eventKey="overview">Project Overviews</Nav.Link>
                        </Nav.Item>
                      )}
                    </Nav>
                    
                    <Tab.Content>
                      {/* Description Tab (for all project types) */}
                      <Tab.Pane eventKey="description">
                        <div className="details-content">
                          <h4>{projectType === "design" ? "Project Description" : "Detailed Description"}</h4>
                          <p className="full-description justify-text">
                            {fullDescription}
                          </p>
                          
                          {/* Technologies section for ALL project types */}
                          {technologies && technologies.length > 0 && (
                            <>
                              <h5 className="mt-4 mb-3" style={{color: '#fb9ebd'}}>
                                {projectType === "design" ? "Design Tools & Methods" : "Technologies Used"}
                              </h5>
                              <div className="technologies-list">
                                {technologies.map((tech, index) => (
                                  <span key={index} className="technology-tag">{tech}</span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </Tab.Pane>
                      
                      {/* Overview Tab for Design projects */}
                      {projectType === "design" && overviews && (
                        <Tab.Pane eventKey="overview">
                          <div className="overviews-section">
                            <h4>Project Overview</h4>
                            {overviews.length > 0 ? (
                              <div className="overviews-list">
                                {overviews.map((overview, index) => (
                                  <div key={index} className="overview-item mb-4">
                                    <h5>{overview.title}</h5>
                                    <p className="justify-text mb-0">{overview.content}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="justify-text">No overview information available.</p>
                            )}
                          </div>
                        </Tab.Pane>
                      )}
                      
                      {/* Results Tab for Design projects */}
                      {projectType === "design" && results && (
                        <Tab.Pane eventKey="results">
                          <div className="results-section design-results">
                            <h4>Design Results & Visuals</h4>
                            {results.length > 0 ? (
                              <div className="results-grid-layout">
                                {/* Separate images from metrics */}
                                <div className="results-image-group">
                                  <h5>Design Visuals</h5>
                                  <div className="design-results-grid">
                                    {results
                                      .filter(result => result.type === 'image')
                                      .map((result, index) => (
                                        <div key={index} className="design-image-card">
                                          <div className={`design-image-container ${result.containerClass || ''}`}>
                                            <img src={result.url || imgUrl} alt={result.caption} />
                                          </div>
                                          <div className="design-image-caption">
                                            <p>{result.caption}</p>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                                
                                {/* Metrics section */}
                                {results.filter(result => result.type === 'metric').length > 0 && (
                                  <div className="results-metrics-group">
                                    <h5>Performance Metrics</h5>
                                    <div className="design-metric-grid">
                                      {results
                                        .filter(result => result.type === 'metric')
                                        .map((result, index) => (
                                          <div key={index} className="design-metric-card">
                                            <h5>{result.title}</h5>
                                            <div className="design-metric-content">
                                              {result.content}
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <p className="justify-text">No results available.</p>
                            )}
                          </div>
                        </Tab.Pane>
                      )}
                      
                      {/* Workflow Tab (AI/IoT only) */}
                      {projectType === "ai-iot" && workflows && (
                        <Tab.Pane eventKey="workflow">
                          <div className="workflow-section">
                            <h4>Project Workflow & Methodology</h4>
                            {workflows.length > 0 ? (
                              <div className="workflow-list">
                                {workflows.map((workflow, index) => (
                                  <div key={index} className="workflow-item mb-4">
                                    <div className="workflow-header d-flex align-items-center mb-3">
                                      <div className="workflow-number me-3" style={{
                                        background: 'linear-gradient(135deg, #fb9ebd, #0D102F)',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '18px'
                                      }}>
                                        {index + 1}
                                      </div>
                                      <h5 className="mb-0" style={{color: 'white'}}>{workflow.title}</h5>
                                    </div>
                                    <p className="mb-0" style={{paddingLeft: '5px'}}>{workflow.content}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="justify-text">No workflow information available.</p>
                            )}
                          </div>
                        </Tab.Pane>
                      )}
                      
                      {/* Results Tab (AI/IoT only) */}
                      {projectType === "ai-iot" && results && (
                        <Tab.Pane eventKey="results">
                          <div className="results-section">
                            <h4>Results & Output</h4>
                            {results.length > 0 ? (
                              <div className="results-list">
                                {results.map((result, index) => (
                                  <div key={index} className="result-item mb-4">
                                    {result.type === 'image' ? (
                                      <div className="result-image-card">
                                        <div className="project-image-preview">
                                          <img src={result.url || imgUrl} alt={result.caption} />
                                          <div className="image-overlay">
                                            {result.caption}
                                          </div>
                                        </div>
                                      </div>
                                    ) : result.type === 'metric' ? (
                                      <div className="result-metric-card" style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '10px',
                                        padding: '20px',
                                        borderLeft: '4px solid #fb9ebd'
                                      }}>
                                        <h5 style={{color: 'white'}}>{result.title}</h5>
                                        <p className="mb-0" style={{whiteSpace: 'pre-line'}}>{result.content}</p>
                                      </div>
                                    ) : (
                                      <p className="justify-text">{result.content}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="justify-text">No results available.</p>
                            )}
                          </div>
                        </Tab.Pane>
                      )}
                      
                      {/* Overview Tab for Website projects */}
                      {projectType === "website" && overviews && (
                        <Tab.Pane eventKey="overview">
                          <div className="overviews-section">
                            <h4>Project Overview</h4>
                            {overviews.length > 0 ? (
                              <div className="overviews-list">
                                {overviews.map((overview, index) => (
                                  <div key={index} className="overview-item mb-4">
                                    <h5>{overview.title}</h5>
                                    <p className="justify-text mb-0">{overview.content}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="justify-text">No overview information available.</p>
                            )}
                          </div>
                        </Tab.Pane>
                      )}
                    </Tab.Content>
                  </Tab.Container>
                </Col>
                
                <Col lg={4}>
                  <div className="project-links-sidebar">
                    <div className="sidebar-card">
                      <h5>Project Links</h5>
                      <div className="link-buttons">
                        {availableLinks.length > 0 ? (
                          availableLinks.map((linkItem, index) => (
                            <a 
                              key={index}
                              href={linkItem.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`link-button ${linkItem.type === 'demo' ? 'primary' : 
                                        linkItem.type === 'figma' ? 'primary' : 
                                        linkItem.type === 'design' ? 'primary' : 
                                        linkItem.type === 'gdrive' ? 'primary' : 
                                        'secondary'}`}
                            >
                              {linkItem.icon} {linkItem.label}
                            </a>
                          ))
                        ) : (
                          <p className="text-center mb-0" style={{color: '#B8B8B8'}}>No links available</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="sidebar-card mt-4">
                      <h5>Quick Stats</h5>
                      <div className="project-stats">
                        {projectStats && (
                          <>
                            <div className="stat-item">
                              <span className="stat-label">Category</span>
                              <span className="stat-value">{projectStats.category || "Project"}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Status</span>
                              <span className="stat-value">{projectStats.status || "Completed"}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Team Size</span>
                              <span className="stat-value">{projectStats.teamSize || "Individual Project"}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Duration</span>
                              <span className="stat-value">{projectStats.duration || "1 Month"}</span>
                            </div>
                            {projectStats.year && (
                              <div className="stat-item">
                                <span className="stat-label">Year</span>
                                <span className="stat-value">{projectStats.year}</span>
                              </div>
                            )}
                            {projectStats.complexity && (
                              <div className="stat-item">
                                <span className="stat-label">Complexity</span>
                                <span className="stat-value">{projectStats.complexity}</span>
                              </div>
                            )}
                            {projectStats.deliverables && (
                              <div className="stat-item">
                                <span className="stat-label">Deliverables</span>
                                <span className="stat-value">{projectStats.deliverables}</span>
                              </div>
                            )}
                            {projectStats.users && (
                              <div className="stat-item">
                                <span className="stat-label">Users</span>
                                <span className="stat-value">{projectStats.users}</span>
                              </div>
                            )}
                            {projectStats.accessibility && (
                              <div className="stat-item">
                                <span className="stat-label">Accessibility</span>
                                <span className="stat-value">{projectStats.accessibility}</span>
                              </div>
                            )}
                            {projectStats.accuracy && (
                              <div className="stat-item">
                                <span className="stat-label">Accuracy</span>
                                <span className="stat-value">{projectStats.accuracy}</span>
                              </div>
                            )}
                            {projectStats.competition && (
                              <div className="stat-item">
                                <span className="stat-label">Competition</span>
                                <span className="stat-value">{projectStats.competition}</span>
                              </div>
                            )}
                            {projectStats.institution && (
                              <div className="stat-item">
                                <span className="stat-label">Institution</span>
                                <span className="stat-value">{projectStats.institution}</span>
                              </div>
                            )}
                            {projectStats.tools && (
                              <div className="stat-item">
                                <span className="stat-label">Tools</span>
                                <span className="stat-value">{projectStats.tools}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
  )
}