import React from 'react';
import '../styles/footer.css'; // Optional styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} | Designed by <strong>Data-Software Analysis</strong></p>
    </footer>
  );
};

export default Footer;
