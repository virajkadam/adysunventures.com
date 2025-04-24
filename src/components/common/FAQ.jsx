import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const FAQ = ({ 
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our IT services and solutions',
  faqItems = [],
  className = ''
}) => {
  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: 'What IT services does Adysun Ventures offer?',
      answer: 'Adysun Ventures offers a comprehensive range of IT services including software development, cloud computing solutions, cybersecurity services, IT consulting, digital transformation, data analytics, and managed IT services tailored to meet the specific needs of your business.'
    },
    {
      question: 'How can IT solutions improve my business operations?',
      answer: 'IT solutions can streamline workflows, automate repetitive tasks, improve data management, enhance security, enable remote work capabilities, provide business intelligence insights, and create scalable infrastructure that grows with your business needs.'
    },
    {
      question: 'What industries does Adysun Ventures specialize in?',
      answer: 'We specialize in providing IT solutions for various industries including Transportation & Logistics, E-Commerce & Retail, Manufacturing, Stock Exchange & Financial Services, and more. Our industry-specific expertise allows us to deliver tailored solutions that address unique challenges in each sector.'
    },
    {
      question: 'How does your business strategy consulting work?',
      answer: 'Our business strategy consulting begins with a thorough assessment of your current operations, challenges, and goals. We then develop a strategic roadmap that aligns technology investments with your business objectives, identify areas for improvement, and provide implementation guidance to achieve measurable results.'
    },
    {
      question: 'What security measures do you implement to protect client data?',
      answer: 'We implement robust security measures including end-to-end encryption, secure access controls, regular security audits, compliance with industry standards (ISO 27001, GDPR), multi-factor authentication, continuous monitoring, and employee security training to ensure your data remains protected.'
    }
  ];

  // Use provided FAQs or default ones
  const faqs = faqItems.length > 0 ? faqItems : defaultFaqs;

  // Schema.org structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`faq-section py-5 ${className}`}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3">{title}</h2>
            <p className="lead text-secondary mb-0">{subtitle}</p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item border border-1 border-light-subtle mb-3" key={index}>
                  <h3 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className="accordion-button fw-semibold rounded-3 shadow-sm collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${index}`} 
                      aria-expanded={index === 0 ? "true" : "false"} 
                      aria-controls={`collapse${index}`}
                      style={{
                        '--bs-accordion-active-bg': 'rgba(255, 103, 0, 0.03)',
                        '--bs-accordion-active-color': '#ff6700',
                        '--bs-accordion-btn-focus-border-color': '#ff6700',
                        '--bs-accordion-btn-focus-box-shadow': '0 0 0 0.25rem rgba(255, 103, 0, 0.25)',
                        backgroundColor: '#f8f9fa'
                      }}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div 
                    id={`collapse${index}`} 
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`} 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body bg-light rounded-bottom pt-0 px-4 pb-4">
                      <p className="mb-0 text-secondary">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  faqItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

export default FAQ; 