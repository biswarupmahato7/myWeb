import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.tech</h4>
                <h5>Haldia Institute and Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              B.tech in Computer science and Engineering from Haldia Institute and Technology,
              <br />
              <span className="address">Haldia, West Bengal</span>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary </h4>
                <h5>Purulia Zilla School</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              I completed my higher secondary education at Purulia Zilla School,
              <br />
              <span className="address">Purulia, West Bengal</span>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary</h4>
                <h5>Purulia Zilla School</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
            I completed my secondary education at Purulia Zilla School
            <br />
            <span className="address">Purulia, West Bengal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
