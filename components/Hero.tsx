import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Best Preschool & Day Care Centre for Your Child</h1>

        <p className="hero-subtitle">
          <span className="badge">LIVE CCTV</span>
          <span>EYFS Curriculum</span>
          <span>|</span>
          <span>8:30 AM to 6 PM</span>
          <span>|</span>
          <span>6 Months+ Children</span>
        </p>

        <button className="btn-primary">
          View Fee Structure
        </button>
      </div>

      <div className="hero-image-wrapper">
  <Image
    src="/assets/school_bus.png"
    alt="School Bus"
    width={700}
    height={500}
    className="school-bus"
    priority
  />
</div>

      <div className="hero-bottom-clouds">
        <svg
          viewBox="0 0 1440 100"
          className="cloud-svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z"
          />
        </svg>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon bg-orange">👨‍👩‍👧‍👦</div>
            <div className="stat-text">
              <h3>22,000+</h3>
              <p>Trusting Parents</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon bg-teal">🏫</div>
            <div className="stat-text">
              <h3>35+</h3>
              <p>Centres</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon bg-blue">🏆</div>
            <div className="stat-text">
              <h3>72+</h3>
              <p>Awards</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon bg-purple">👍</div>
            <div className="stat-text">
              <h3>22+</h3>
              <p>Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}