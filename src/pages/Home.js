import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const Home = () => {
    const [activeFeature, setActiveFeature] = useState(null);
    const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [featuresRef, featuresVisible] = useIntersectionObserver({ threshold: 0.1 });

    const features = [
        {
            title: "Comprehensive Resources",
            description: "Access a wide range of study materials, including previous exams, lecture notes, and other resources.",
            icon: "📚"
        },
        {
            title: "Exam Preparation",
            description: "Review past exam papers and practice questions to ensure you're well-prepared for your exams.",
            icon: "✏️"
        },
        {
            title: "Collaborative Learning",
            description: "Join fellow Aggies in revolutionizing the way we study, ensuring you have all the tools you need to succeed academically.",
            icon: "🤝"
        }
    ];

    return (
        <div className="home">
            <section ref={heroRef} className={`hero ${heroVisible ? 'fade-in' : ''}`}>
                <h1>Welcome to AggieStudy!</h1>
                <p className="mission">The one stop shop for Texas A&M students to study</p>
                <Link to="/courses" className="cta-button">Get Started</Link>
            </section>

            <section ref={statsRef} className={`stats ${statsVisible ? 'fade-in' : ''}`}>
                <div className="stat-item">
                    <h2>1,000+</h2>
                    <p>Study Questions</p>
                </div>
                <div className="stat-item">
                    <h2>0+</h2>
                    <p>Active Users</p>
                </div>
                <div className="stat-item">
                    <h2>2+</h2>
                    <p>Courses Covered</p>
                </div>
            </section>

            <section ref={featuresRef} className={`features ${featuresVisible ? 'fade-in' : ''}`}>
                <div className="features-container">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature ${activeFeature === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveFeature(index)}
                            onMouseLeave={() => setActiveFeature(null)}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <Link to="/courses" className="cta-button">Dive In</Link>
            </section>
        </div>
    );
};

export default Home;