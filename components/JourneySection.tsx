import Image from "next/image";
export default function JourneySection() {
  return (
    <section className="journey-section" id="journey">
        <Image
  src="/assets/butterfly.png"
  alt=""
  width={80}
  height={80}
  className="journey-butterfly"
/>

<Image
  src="/assets/rocket.png"
  alt=""
  width={80}
  height={80}
  className="journey-rocket"
/>

<Image
  src="/assets/fish.png"
  alt=""
  width={80}
  height={80}
  className="journey-fish"
/>
      <div className="journey-header">
        <span className="journey-tag">
          JOURNEY OF YOUR CHILD
        </span>

        <h2>
          Every Step, Every Learning,
          <br />
          Every Little Achievement ❤️
        </h2>

        <p>
          We nurture curiosity, build confidence and help
          your child shine in every way.
        </p>
      </div>

      <div className="journey-grid">
        <div className="journey-card">
          <div className="journey-icon">🔍</div>
          <h3>Discover</h3>
          <ul>
            <li>Sparks curiosity</li>
            <li>Explores the world</li>
            <li>Observes and wonders</li>
            <li>Loves learning</li>
          </ul>
        </div>

          <div className="journey-arrow">➜</div>

        <div className="journey-card">
          <div className="journey-icon">📚</div>
          <h3>Learn</h3>
          <ul>
            <li>Builds strong basics</li>
            <li>Develops communication</li>
            <li>Learns through play</li>
            <li>Gains confidence</li>
          </ul>
        </div>

          <div className="journey-arrow">➜</div>

        <div className="journey-card">
          <div className="journey-icon">🚀</div>
          <h3>Explore</h3>
          <ul>
            <li>Thinks & imagines</li>
            <li>Asks questions</li>
            <li>Understands concepts</li>
            <li>Solves problems</li>
          </ul>
        </div>

          <div className="journey-arrow">➜</div>

        <div className="journey-card">
          <div className="journey-icon">🎨</div>
          <h3>Create</h3>
          <ul>
            <li>Expresses ideas</li>
            <li>Enjoys art & music</li>
            <li>Uses imagination</li>
            <li>Builds creativity</li>
          </ul>
        </div>

          <div className="journey-arrow">➜</div>

        <div className="journey-card">
          <div className="journey-icon">🏆</div>
          <h3>Grow</h3>
          <ul>
            <li>Becomes independent</li>
            <li>Makes good choices</li>
            <li>Shows kindness</li>
            <li>Ready for the future</li>
          </ul>
        </div>
      </div>

      <p className="journey-footer">
        From little moments to big milestones, we're with
        your child every step of the way.
      </p>
      
    </section>
  );
}