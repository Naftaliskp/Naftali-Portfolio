import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120 - Math.random() * 40);
  const toRotate = [ "Software Quality Assurance", "Performance Tester", "Web Developer" ];
  const period = 700;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Naftali`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Quality Assurance", "Performance Tester", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Bachelor of Information Technology graduate from Institut Teknologi Sepuluh Nopember with experience in software quality assurance, performance testing, and application development. Currently working as a Software Quality Assurance at PT Astra Graphia Information Technology, I create and maintain test cases, perform manual and automated testing using Playwright, conduct performance testing with K6, and utilize Jira for test management. Previously, I worked as a Junior Performance Test Engineer at PT Bank Syariah Indonesia Tbk, specializing in LoadRunner-based testing, server monitoring with Dynatrace, and delivering detailed reports for stress and load tests. With a strong foundation in both technical and collaborative skills, I am passionate about ensuring software reliability, optimizing performance, and delivering high-quality solutions.</p>
                  <button onClick={() => window.open("https://www.linkedin.com/in/naftaliskp", "_blank")}>
                    Find me on LinkedIn <ArrowRightCircle size={25} />
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
