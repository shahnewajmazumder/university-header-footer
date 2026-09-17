function Footer({ universityName, copyrightYear }) {
  return (
    <footer className="footer">
      <h3>{universityName}</h3>

      <p>
        © {copyrightYear} {universityName}. All Rights Reserved.
      </p>

      <p>Contact: info@adtu.ac.in</p>
    </footer>
  );
}

export default Footer;