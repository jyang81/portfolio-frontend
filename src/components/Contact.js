import React from 'react';

const Contact = () => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a name="contact">
        <main className="dark-bg">
          <h2>GET IN TOUCH</h2>
          <hr />
          <p>Please contact me at any of the following:</p>
          <div className="section">
            <div className="row">
              <div className="col">
                <i className="far fa-envelope fa-4x"></i>
              </div>
              <div className="col">
                <i className="fab fa-github fa-4x"></i>
              </div>
              <div className="col">
                <i className="fab fa-linkedin fa-4x"></i>
              </div>
              <div className="col">
                <i className="fab fa-twitter fa-4x"></i>
              </div>
              <div className="col">
                <i className="fab fa-medium fa-4x"></i>
              </div>
            </div>
          </div>
        </main>
      </a>
    );
};

export default Contact;