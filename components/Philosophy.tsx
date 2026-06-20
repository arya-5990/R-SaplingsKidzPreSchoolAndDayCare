export default function Philosophy() {
  const pillars = [
    {
      icon: "🎨",
      title: "Creativity",
      desc: "Encouraging imagination through art, music and playful exploration.",
    },
    {
      icon: "📚",
      title: "Learning",
      desc: "Building strong foundations through engaging and meaningful activities.",
    },
    {
      icon: "🤝",
      title: "Social Skills",
      desc: "Helping children communicate, share and collaborate confidently.",
    },
    {
      icon: "🚀",
      title: "Confidence",
      desc: "Supporting independence and self-belief every day.",
    },
    {
      icon: "❤️",
      title: "Emotional Growth",
      desc: "Creating a caring environment where every child feels valued.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Parent Partnership",
      desc: "Working together with families to support every child's journey.",
    },
  ];

  return (
    <section
     className="pillars-section"
      id="learning"
>
      <div className="pillars-header">

        <span className="pillars-tag">
          OUR PHILOSOPHY
        </span>

        <h2>
          Our Learning Pillars 🌈
        </h2>

        <p className="pillars-subtitle">
          Every child grows through creativity, confidence,
          kindness and joyful learning experiences.
        </p>

      </div>
      <div className="pillar-star">⭐</div>
      <div className="pillar-heart">❤️</div>
      <div className="pillar-cloud">☁️</div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">

            <div className="pillar-icon">
              {pillar.icon}
            </div>

            <h3>{pillar.title}</h3>

            <p>{pillar.desc}</p>

          </div>
        ))}
      </div>
      <p className="pillar-footer">
  From little moments to big milestones, we're with your child every step of the way. 💖
</p>

    </section>
  );
}