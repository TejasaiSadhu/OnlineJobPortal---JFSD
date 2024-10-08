import React from 'react';
import './AboutUs.css'; // Import your CSS file if you have one

// Create a reusable TeamMember component
const TeamMember = ({ name, role, phone, email, imageUrl }) => {
  const defaultImage = 'path/to/default-image.jpg'; // Placeholder for missing images
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img
            src={imageUrl || defaultImage}
            alt={`Photo of ${name}`}
            style={{ width: '70%', borderRadius: '10px' }} // Added border radius
            onError={(e) => {
              e.target.src = defaultImage; // Set default image on error
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p><b>{role}</b></p>
            <p>Mobile No. - {phone}</p>
            <p>Email Id - {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'Sadhu Teja Sai',
      role: 'Project Developer',
      phone: '6305093493',
      email: 'Sadhutejasai86@gmail.com',
      imageUrl: '', // Add a URL for the image
    },
    
    // Add more team members here
  ];

  return (
    <div className="container-fluid about-section">
      <div className="text-center">
        <h1>About Us</h1>
        <h4>We are a group of techies currently working as Interns at Capgemini India</h4>
      </div>
      <hr />

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      {/* Dynamically render team members */}
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          phone={member.phone}
          email={member.email}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
};

export default AboutUs;