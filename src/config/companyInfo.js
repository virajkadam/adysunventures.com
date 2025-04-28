const companyInfo = {
  name: {
    full: "ADYSUN VENTURES PVT. LTD.",
    short: "ADYSUN VENTURES",
    legal: "ADYSUN VENTURES PRIVATE LIMITED",
  },
  contact: {
    emails: [
      {
        type: "primary",
        address: "info@adysunventures.com",
        department: "General Inquiries",
      },
      //   {
      //     type: "support",
      //     address: "support@adysunventures.com",
      //     department: "Technical Support",
      //   },
      {
        type: "careers",
        address: "hr@adysunventures.com",
        department: "HR & Recruitment",
      },
    ],
    phones: [
      {
        type: "mobile",
        number: "+91 9970627630",
        department: "HR Department",
      },
      // {
      //   type: "mobile",
      //   number: "+91 7276691723",
      //   department: "Business Enquries",
      // },
      //   {
      //     type: "mobile2",
      //     number: "+91 9420245878",
      //     department: "Mobile 2",
      //   },
    ],
    locations: [
      {
        id: "location-1",
        type: "headquarters",
        name: "Pune Office (Head Office)",
        address: {
          line1: "Adysun Ventures Pvt. Ltd.",
          line2: "Workplex, S no 47,",
          line3: "Near Bhapkar Petrol Pump,",
          line4: "Pune, Maharashtra - 411009"
        },
        coordinates: {
          lat: 18.4892741,
          lng: 73.8315561,
        },
        googleMapsUrl:
          "https://maps.app.goo.gl/ABiUMnGGjcG7sT6o6",
      },
      {
        id: "location-2",
        type: "branch",
        name: "Location 2",
        address: {
          line1: "Coming Soon"
        },
        status: "Coming Soon"
      },
    ],
  },
  social: {
    platforms: [
    //   {
    //     name: "Facebook",
    //     url: "#",
    //     icon: "fab fa-facebook-f",
    //     isActive: true,
    //   },
      {
        name: "Twitter",
        url: "https://x.com/adysunventures",
        icon: "fab fa-twitter",
        isActive: true,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/adysunventures/",
        icon: "fab fa-instagram",
        isActive: true,
      },
    //   {
    //     name: "YouTube",
    //     url: "#",
    //     icon: "fab fa-youtube",
    //     isActive: true,
    //   },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adysun-ventures/",
        icon: "fab fa-linkedin-in",
        isActive: true,
      },
      {
        name: "Google Business Profile",
        url: "https://g.co/kgs/C5Fe6uz",
        icon: "fab fa-google",
        isActive: true,
      },
      {
        name: "Google Maps",
        url: "https://maps.app.goo.gl/ABiUMnGGjcG7sT6o6",
        icon: "fas fa-map-marker-alt",
        isActive: true,
      },
    ],
  },
  meta: {
    title:
      "Adysun Ventures | IT Solutions & Business Strategy Experts | Tailored IT Services",
    description:
      "Adysun Ventures, founded in Dec 2020, is a premier IT service provider specializing in business strategies and cutting-edge technology. Partner with us for reliable and innovative IT solutions.",
    keywords:
      "Adysun Ventures, IT Solutions, Business Strategies, IT Services, Premium IT Products, Collaborative IT Partnerships, Innovative IT Solutions",
    ogImage: "https://adysunventures.com/assets/adysun_ventures_image.jpg",
    foundedYear: 2020,
  },
  stats: {
    totalProjects: 50,
    happyClients: 200,
    awards: 3,
  },
  about: {
    shortDescription:
      "We deliver high-performance services to help your business embrace innovation and tackle the ever-changing challenges of today's digital world. Designed to meet your specific needs, our services capture and deliver business value in a cost-effective way. Based on your strategic objectives, we focus on business outcomes in software engineering, advanced technology, development teams, digital consulting, and solution operations.",
  },
  website: {
    domain: "adysunventures.com",
    url: "https://adysunventures.com",
  },
};

export default companyInfo; 