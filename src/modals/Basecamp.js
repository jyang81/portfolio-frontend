import React from 'react';

const Basecamp = () => {
    return (
      <div
        className="modal fade"
        id="basecampModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="basecampModalTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title bold" id="basecampModalTitle">
                BaseCamp
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="img-fluid rounded"
                src="basecamp-ss.jpg"
                alt="basecamp-1"
              />
              <table className="table table-striped table-borderless top-margin">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan="2">
                      Quick Overview
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ width: "15%" }}>
                      What is it?
                    </th>
                    <td>
                      A dashboard app for coding bootcamp students to track
                      their progress and organize their thoughts and ideas.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ width: "15%" }}>
                      Why did I make it?
                    </th>
                    <td>
                      I wanted to make an app to keep track of all of the things
                      related to my bootcamp experience (ideas, timeline,
                      feelings, tips, etc.). I made it because it's something I
                      wish I had during my program and thought it could help
                      other students as well. It's a home <strong>base</strong>{" "}
                      for your boot<strong>camp</strong>!
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ width: "15%" }}>
                      How did I make it?
                    </th>
                    <td>
                      • Ruby on Rails backend with a React frontend <br />
                      • PostgreSQL database <br />
                      • JWT user authorization <br />• Semantic UI and CSS grid
                      for styling and layout
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ width: "15%" }}>
                      Details
                    </th>
                    <td>
                      For a full write up, please see the ReadMe on Github.{" "}
                      <br />
                      Check out the live site here, and log in with{" "}
                      <code>'demo@demo.com, pw: demo'</code> for a sample user experience, or create your own account.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default Basecamp;



