import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div id="top-recruiters">
            <h4 className="display-4 text-center">Our Top Recruiters</h4>
          </div>
          <div id="topRecruiters" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.zarla.com/images/facebook-logo-2400x2400-20220518.png?crop=1:1,smart&width=150&dpr=2" alt="Recruiter 1" />
              </div>
              <div className="carousel-item">
                <img src="https://www.zarla.com/images/google-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2" alt="Recruiter 2" />
              </div>
              <div className="carousel-item">
                <img src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2" alt="Recruiter 3" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div id="testimonials">
        <h4 className="display-4 text-center">Testimonials</h4>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://img.freepik.com/free-photo/stylish-bearded-guy-posing-against-white-wall-with-glasses_176420-33032.jpg?w=826&t=st=1725720238~exp=1725720838~hmac=f73ee15d580f5379f87bf99454d0a85161f1cc58d440e416e966fac2df201997" className="card-img" alt="Jean Doe" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Jean Doe</h5>
                    <p className="card-text">Mock Testimonial 1</p>
                    <p className="card-text"><small className="text-muted">Batch of 2018</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://img.freepik.com/free-photo/man-striped-shirt-looks-surprised-confused_144627-68195.jpg?w=826&t=st=1725720278~exp=1725720878~hmac=4ecc7ce8939bd3d1769c021ee62277fda436a32f24a5b3b212189f474a7ed28c" className="card-img" alt="Sam Smith" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Sam Smith</h5>
                    <p className="card-text">Mock Testimonial 2</p>
                    <p className="card-text"><small className="text-muted">Batch of 2019</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://img.freepik.com/free-photo/beautiful-woman-standing-against-yellow-wall_23-2148204587.jpg?t=st=1725720333~exp=1725723933~hmac=2b3093ef29a03ab3660a633325bbb283b07d160700e9344febb35412108a4016&w=740" className="card-img" alt="Angelina Joseph" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Angelina&nbsp;Joseph</h5>
                    <p className="card-text">Mock Testimonial 3</p>
                    <p className="card-text"><small className="text-muted">Batch of 2020</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more testimonial cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
