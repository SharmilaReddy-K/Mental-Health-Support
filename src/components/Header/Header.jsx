import React from 'react';
import "./Header.css"

function Header({ onSelectChange, displayComponent }) {
  function RenderSelectComponent() {
    switch (displayComponent) {
      case "chatbot":
        window.location.href = "https://www.google.com";
        return null;
      case "ex":
        window.location.href = "https://www.nimh.nih.gov/health/topics/suicide-prevention";
        return null;
      case "ex1":
        return (
          <div style={{ padding: "50px 20px", textAlign: "center" }}>
            <h1 style={{ marginBottom: "20px" }}>Motive Behind This Project</h1>
            <p style={{ 
            maxWidth: "900px", 
            margin: "0 auto", 
            lineHeight: "1.7",
            fontSize: "18px"
          }}>
              Under the guidance of our mentor, our team developed a web-based mental health 
              application designed to support users’ emotional well-being through guided
              exercises, educational resources, and self-care tools.
            </p>
            <h2 style={{ marginTop: "60px" }}>About Us</h2>
            <p style={{ 
            maxWidth: "800px", 
            margin: "20px auto 50px",
            lineHeight: "1.6"
          }}>
              We are a passionate and empathetic team currently pursuing B.Tech. 
              Below are the details of our team members.
            </p>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
              <div>
                <h3>Sharmila Reddy K</h3>
                <p>Student</p>
              </div>
              <div>
                <h3>Sahana G</h3>
                <p>Student</p>
              </div>
              <div>
                <h3>Shalini B</h3>
                <p>Student</p>
              </div>
              <div>
                <h3>Anish</h3>
                <p>Professor (Mentor)</p>
              </div>
            </div>
          </div>
        );
      case "ex2":
        window.location.href = "https://www.thelivelovelaughfoundation.org/helpline";
        return null;
      default:
        return null;
    }
  }

  return (
    <div id="header">
      <h4 className="header1">Mental Health Companion</h4>
      <nav className="header-right">
        <li>
          <select value={displayComponent} onChange={onSelectChange}>
            <option>More</option>
            <option value="ex2">Helpline Number</option>
            <option value="ex">Suicidal Helpline Number</option>
            <option value="ex1">About us</option>
          </select>
        </li>
        <li>
          <RenderSelectComponent />
        </li>
      </nav>
    </div>
  );
}

export default Header;
