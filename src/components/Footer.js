import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/portfolio-logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon.png';
import navIcon3 from '../assets/img/mail-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/naftaliskp" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/Naftaliskp" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="" />
                </a>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=naftacacakanaya@gmail.com&su=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hi Naftali,\n\nI saw your portfolio and wanted to connect...\n\nBest regards,')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
            </div>
            <p>℗ Naftali, 2026.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
