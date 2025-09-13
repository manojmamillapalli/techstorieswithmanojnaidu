import React, { useEffect, useRef, useState } from "react";

const resumeItems = [
  {
    side: "right",
    title: "Associate Software Developer",
    company: "Mastech InfoTrellis - Chennai",
    duration: "2024-present",
    points: [
      "Built and exposed multiple APIs, optimizing request routing and improving system integration and performance.",
      "Developed and maintained core microservices and API Gateway with dynamic routing and secure token-based authentication.",
      "Automated API response validation across regional databases using C# and Splunk log processing.",
      "Implemented throttling mechanisms to prevent database overload and enhance reliability.",
      "Analyzed 5xx server errors via Splunk to identify patterns and improve API stability."
    ],
  },
  {
    side: "left",
    title: "BTech(Computer Science and Engineering)",
    company: "University College of Engineering Narasaraopet-JNTUK",
    duration: "2021-2024",
    points: ["Grade: 8.01 CGPA"],
  },
  {
    side: "right",
    title: "Intermediate(MPC)",
    company: "Narayana Junior College, Gudur",
    duration: "2018-2020",
    points: ["Grade: 97.2%"],
  },
  {
    side: "left",
    title: "10th Class",
    company: "Ratnam English Medium High School, Gudur",
    duration: "2017–2018",
    points: ["Grade: 10 GPA"],
  },
];

export default function Resume() {
  const carRef = useRef(null);
  const [cardPositions, setCardPositions] = useState([]);
  const cardRefs = useRef([]);

  // Calculate dynamic positions based on content
  useEffect(() => {
    const calculatePositions = () => {
      const positions = [];
      let currentTop = 0;
      const minSpacing = window.innerWidth <= 768 ? 80 : 120; // Minimum spacing between cards

      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          positions[index] = currentTop;
          const cardHeight = cardRef.offsetHeight || 200; // Fallback height
          currentTop += cardHeight + minSpacing;
        } else {
          // Fallback for initial render
          const estimatedHeight = resumeItems[index].points.length > 1 ? 280 : 180;
          positions[index] = currentTop;
          currentTop += estimatedHeight + minSpacing;
        }
      });

      setCardPositions(positions);
    };

    // Initial calculation
    setTimeout(calculatePositions, 100);

    // Recalculate on window resize
    const handleResize = () => {
      setTimeout(calculatePositions, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("resume");
      if (!section || !carRef.current || cardPositions.length === 0) return;

      const container = section.querySelector(".road-container");
      const cards = container.querySelectorAll(".resume-card");

      const sectionTop = section.offsetTop;
      const sectionHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const viewportMid = window.innerHeight / 2;

      const startY = sectionTop - viewportMid + 100;
      const endY = sectionTop + sectionHeight - viewportMid - 120;
      let offset = scrollY - startY;
      if (scrollY < startY) offset = 0;
      else if (scrollY > endY) offset = endY - startY;

      carRef.current.style.top = `${Math.max(0, offset)}px`;

      // Position car based on visible cards using dynamic positions
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < viewportMid && rect.bottom > viewportMid) {
          const cardOffset = cardPositions[idx] || 0;
          carRef.current.style.top = `${cardOffset + 40}px`;
          carRef.current.style.transition = "top 0.3s ease-out";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [cardPositions]);

  const roadHeight = cardPositions.length > 0
    ? Math.max(...cardPositions) + 400
    : resumeItems.length * 320 + 400;

  return (
    <div className="min-h-screen bg-red-50 relative overflow-x-hidden">
      <style jsx>{`
        body { overflow-x: hidden; }

        .resume-section {
          background: #fff6f6;
          padding: 80px 0 40px 0;
          min-height: 100vh;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .resume-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 clamp(12px, 5vw, 48px);
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .resume-header h2 {
          font-size: clamp(1.6rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #2c2c2c;
        }
        .download-btn {
          background: #1c1c1c;
          color: #fff;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .download-btn:hover {
          background: #333;
          transform: scale(1.04);
        }

        .road-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 40px 16px;
          box-sizing: border-box;
        }

        .road-line {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 120px;
          height: 100%;
          background: #000;
          z-index: 0;
          border-radius: 40px;
          overflow: hidden;
        }
        .road-line::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 10px;
          height: 100%;
          background: repeating-linear-gradient(to bottom, #ffffff 0 24px, transparent 24px 48px);
          transform: translateX(-50%);
          z-index: 1;
        }

        .mario-car {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          z-index: 3;
          transition: top 0.1s ease-out;
          pointer-events: none;
        }
        .mario-car img {
          width: 100%;
          height: auto;
        }

        .resume-card {
          position: absolute;
          width: 500px;
          display: flex;
          align-items: flex-start;
          z-index: 2;
        }
        .resume-card.left {
          left: calc(50% - 650px);
          flex-direction: row-reverse;
          text-align: right;
        }
        .resume-card.right {
          left: calc(50% + 140px);
          text-align: left;
        }

        .card {
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
          padding: 36px 40px;
          margin-bottom: 64px;
          min-width: 360px;
          max-width: 500px;
          width: 100%;
          position: relative;
        }
        .card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 6px;
        }

        .duration-tag {
          position: absolute;
          top: 18px;
          right: 24px;
          background: #222;
          color: #fff;
          padding: 6px 18px;
          border-radius: 16px;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .resume-card.left .duration-tag {
          right: auto;
          left: 24px;
        }

        .card .company { font-weight: 600; color: #444; margin-bottom: 2px; }
        .card .team { font-size: 1rem; color: #888; margin-bottom: 8px; }
        .card ul { margin: 12px 0 0 0; padding-left: 20px; }
        .card li { margin-bottom: 7px; font-size: 1rem; color: #333; line-height: 1.6; }

        .connector {
          position: absolute;
          top: 50%;
          width: 60px;
          height: 8px;
          background: #222;
          transform: translateY(-50%);
          z-index: 1;
        }
        .resume-card.left .connector {
          left: 100%;
          border-radius: 0 8px 8px 0;
        }
        .resume-card.right .connector {
          left: -60px;
          border-radius: 8px 0 0 8px;
        }

        /* Responsive - Tablet */
        @media (max-width: 1024px) {
          .road-line { width: 90px; }
          .resume-card.left { left: calc(50% - 560px); }
          .resume-card.right { left: calc(50% + 110px); }
          .mario-car { width: 140px; }
        }

        /* Responsive - Mobile */
        @media (max-width: 768px) {
          .resume-header {
            flex-direction: column;
            gap: 18px;
            padding: 0 12px;
            text-align: center;
          }
          .resume-header h2 { font-size: 1.6rem; }
          .download-btn { font-size: 0.95rem; padding: 10px 16px; }

          .road-container {
            padding: 40px 16px 80px;
            max-width: 100%;
            position: relative;
          }

          /* Road positioned on the left side */
          .road-line {
            position: absolute;
            left: 60px;
            top: 0;
            width: 60px;
            height: 100%;
            transform: none;
            z-index: 0;
          }

          /* Mario car aligned with the road on left */
          .mario-car {
            position: absolute;
            left: 60px;
            transform: translateX(-50%);
            width: 100px;
            z-index: 3;
          }
          .mario-car img {
            width: 100%;
            height: auto;
          }

          /* All cards positioned on the right side */
          .resume-card {
            position: absolute;
            width: calc(100% - 140px);
            left: 140px !important;
            flex-direction: row;
            text-align: left;
            z-index: 2;
          }

          .resume-card.left,
          .resume-card.right {
            left: 140px !important;
            flex-direction: row;
            text-align: left;
          }

          /* Connectors from cards to road */
          .connector {
            position: absolute;
            top: 50%;
            left: -80px;
            width: 80px;
            height: 6px;
            background: #222;
            transform: translateY(-50%);
            z-index: 1;
            border-radius: 6px 0 0 6px;
          }

          .resume-card.left .connector,
          .resume-card.right .connector {
            left: -80px;
            width: 80px;
            border-radius: 6px 0 0 6px;
          }

          .card {
            width: 100%;
            padding: 24px 20px;
            max-width: 100%;
            box-sizing: border-box;
            min-width: auto;
          }

          /* Reset duration tag position for mobile */
          .duration-tag {
            position: absolute;
            top: 18px;
            right: 20px;
          }
          
          .resume-card.left .duration-tag {
            right: 20px;
            left: auto;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {
          .road-container {
            padding: 40px 8px 80px;
          }

          .road-line {
            left: 40px;
            width: 40px;
          }

          .mario-car {
            left: 40px;
            width: 80px;
          }
          .mario-car img {
            width: 100%;
            height: auto;
          }

          .resume-card {
            width: calc(100% - 100px);
            left: 100px !important;
          }

          .resume-card.left,
          .resume-card.right {
            left: 100px !important;
          }

          .connector {
            left: -60px;
            width: 60px;
          }

          .resume-card.left .connector,
          .resume-card.right .connector {
            left: -60px;
            width: 60px;
          }

          .card {
            padding: 20px 16px;
          }

          .card h3 { 
            font-size: 1.2rem; 
            margin-bottom: 8px;
          }
          
          .card li { 
            font-size: 0.9rem; 
            margin-bottom: 6px;
          }
          
          .duration-tag { 
            font-size: 0.8rem; 
            padding: 4px 12px;
            right: 16px;
          }
        }
      `}</style>

      <section id="resume" className="resume-section">
        <div className="resume-header">
          <h2>Work Experience And Education Timeline View</h2>
          <a
            href="https://docs.google.com/document/d/1Mrg9UP8JVTfqjapWnlW_fkxpPhSKwOx9/edit?usp=sharing&ouid=108623401510959568303&rtpof=true&sd=true"
            className="download-btn"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="road-container" style={{ minHeight: `${roadHeight}px` }}>
          <div className="road-line"></div>
          <img src="/mario.png" alt="mario-car" className="mario-car" ref={carRef} />

          {resumeItems.map((item, idx) => (
            <div
              key={idx}
              className={`resume-card ${item.side}`}
              style={{ top: `${cardPositions[idx] || idx * 300}px` }}
            >
              <div className={`connector ${item.side}`}></div>
              <div
                className="card"
                ref={el => cardRefs.current[idx] = el}
              >
                <h3>{item.title}</h3>
                <span className="duration-tag">{item.duration}</span>
                <p className="company">{item.company}</p>
                {item.team && <p className="team">{item.team}</p>}
                <ul>
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}