import React from 'react';
import { Link } from 'react-router-dom';

const InternalLinks = ({ className = "", currentPath = "" }) => {
  // Define main service categories and links
  const linkGroups = [
    {
      title: "Our Services",
      links: [
        { name: "Software Development", path: "/services#software-development" },
        { name: "IT Consulting", path: "/services#consulting" },
        { name: "Cloud Computing", path: "/services#cloud-computing" },
        { name: "Digital Transformation", path: "/services#digital-transformation" }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { name: "Stock Exchange & Finance", path: "/industries/stock-exchange" },
        { name: "E-Commerce & Retail", path: "/industries/ecommerce" },
        { name: "Transportation & Logistics", path: "/industries/transportation" },
        { name: "View All Industries", path: "/industries" }
      ]
    },
    {
      title: "About Adysun",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Our Clients", path: "/clients" },
        { name: "Our Partners", path: "/partners" },
        { name: "Contact Us", path: "/contact-us" }
      ]
    }
  ];

  return (
    <div className={`internal-links-section py-4 ${className}`}>
      <div className="container">
        <div className="row">
          {linkGroups.map((group, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h4 className="h5 mb-3">{group.title}</h4>
              <ul className="list-unstyled">
                {group.links.map((link, i) => (
                  <li className="mb-2" key={i}>
                    {currentPath === link.path ? (
                      <span className="text-primary">{link.name}</span>
                    ) : (
                      <Link to={link.path} className="text-decoration-none">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalLinks; 