import React from "react";
import "./Home.css";
import "../index.css";
export default function Home() {
    return (
        <section id="home" className="home-container">
            <div className="home-content">
                <div className="home-left">
                    <h1 className="home-heading">
                        {["Hi,", "I'm", "Manoj", "Naidu", "Mamillapalli"].map((word, i) => (
                            <span key={i}>{word}</span>
                        ))}
                    </h1>
                    <p className="home-description">
                        I am a Software Developer with 1 year of hands-on experience in building scalable
                        backend solutions using Java and .NET. My expertise lies in API development,
                        microservices architecture, and API Gateway design, with a strong focus on system performance, security, and reliability.
                        Beyond work, I am passionate about sharing knowledge on System Design and Data Structures & Algorithms (DSA), continuously
                        improving my problem-solving skills while helping others learn.
                    </p>

                    <div className="connect-btn-wrapper">
                        <button
                            className="connect-btn"
                            onClick={() => window.open("https://www.linkedin.com/in/mamillapallimanojnaidu/", "_blank")}
                        >
                            Connect 1:1
                        </button>
                    </div>
                    <div className="social-row">
                        <a
                            href="https://www.youtube.com/@techstoriesofmanojnaidu"
                            className="social-link youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mamillapallimanojnaidu/"
                            className="social-link linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/manoj_naidu_mamillapalli/"
                            className="social-link instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    <div className="cta-row">
                        <a href="#" className="btn telegram">
                            <i className="fab fa-telegram-plane" style={{ marginRight: "8px" }}></i>
                            Join Telegram Channel
                        </a>
                        <a href="#" className="btn whatsapp">
                            <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
                            Join WhatsApp Channel
                        </a>
                    </div>

                    <div className="scroll-wrapper">
                        <a href="#resume" className="scroll-down-icon" title="Scroll to Resume">
                            <svg width="100" height="100" viewBox="0 0 24 24">
                                <g fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </g>
                                <g fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 15 12 21 18 15" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="home-right">
                    <img src="profile.jpg" alt="Manoj Naidu" className="profile-pic" />
                </div>
            </div>
        </section>
    );
}