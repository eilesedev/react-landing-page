import React from "react";
import './Footer.css'
function Footer() {
    return (
      <footer className="footer">
        <div>
          <p>&copy; {new Date().getFullYear()} My Landing Page. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  export default Footer; 