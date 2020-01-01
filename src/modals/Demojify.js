import React from "react";

const Demojify = () => {
  return (
    <div
      className="modal fade"
      id="demojifyModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="demojifyModalTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title bold" id="demojifyModalTitle">
              Demojify
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
              src="pictionary-ss.png"
              alt="pictionary-1"
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
                  <th scope="row" className="width-15">
                    What is it?
                  </th>
                  <td>
                    Description.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="width-15">
                    Why did I make it?
                  </th>
                  <td>
                    Inspiration
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="width-15">
                    How did I make it?
                  </th>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-code"></i>
                          </td>
                          <td>Ruby on Rails backend with a React frontend</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fab fa-html5"></i>
                          </td>
                          <td>HTML5 Canvas for drawing onto screen</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-exchange-alt"></i>
                          </td>
                          <td>
                            ActionCable to integrate WebSockets for realtime
                            features
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-user"></i>
                          </td>
                          <td>JWT user authorization</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-palette"></i>
                          </td>
                          <td>Semantic UI for styling</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="width-15">
                    Details
                  </th>
                  <td>
                    <p>
                      For full details on the project, please see the
                      <a
                        href="https://github.com/jyang81/pictionary-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none bold"
                      >
                        {" "}
                        README
                      </a>
                      .
                    </p>
                    <p>
                      For a live demo, go to{" "}
                      <a
                        href=" https://react-pictionary.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none bold"
                      >
                        react-pictionary.herokuapp.com
                      </a>{" "}
                      and play with a friend, or open 2 separate browsers to
                      test the app by yourself.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demojify;
