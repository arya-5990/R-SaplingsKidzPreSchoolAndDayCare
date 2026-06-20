import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="site-footer"
       id="about"
    >
      <div className="footer-clouds-top">
        <svg
          viewBox="0 0 1440 100"
          className="cloud-svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffde59"
            d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-mascot">
          <Image
            src="/assets/mascot_lion.png"
            alt="Mascot Lion"
            width={250}
            height={250}
            className="mascot-img"
          />
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Admissions</li>
              <li>Curriculum</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Other Links</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Keep In Touch</h4>
            <ul>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}