import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/denimalz.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Opening Email...");
    
    const { firstName, lastName, message } = formDetails;
    const fullName = `${firstName} ${lastName}`.trim();
    
    // Encode the email components
    const subject = encodeURIComponent(`Portfolio Inquiry - ${fullName || 'Visitor'}`);
    const body = encodeURIComponent(
      `${message || ''}\n\nBest Regards,\n${fullName || 'Visitor'}`
    );
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=naftacacakanaya@gmail.com&su=${subject}&body=${body}`;
    
    // Open email in new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setButtonText("Send");
    setFormDetails({
      firstName: '',
      lastName: '',
      message: ''
    });
    
    // Show success message
    setStatus({ 
      success: true, 
      message: 'Email draft opened! Please complete and send from your email client.' 
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus({});
    }, 5000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p className="contact-subtitle" style={{ color: '#B8B8B8', marginBottom: '30px', fontSize: '16px' }}>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName} 
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Your message..." 
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <p style={{ 
                          fontSize: '14px', 
                          color: '#B8B8B8', 
                          marginBottom: '15px',
                          fontStyle: 'italic'
                        }}>
                          Clicking "Send" will open your email client with a pre-filled message.
                        </p>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col size={12} className="px-1">
                          <p 
                            className={status.success === false ? "danger" : "success"}
                            style={{
                              marginTop: '15px',
                              padding: '10px',
                              borderRadius: '8px',
                              backgroundColor: status.success === false ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                              border: status.success === false ? '1px solid rgba(255, 0, 0, 0.3)' : '1px solid rgba(0, 255, 0, 0.3)'
                            }}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};