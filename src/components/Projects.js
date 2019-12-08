import React from 'react';

const COLUMN = "col-md-12 col-lg-6";
const CARD = "card mb-4 shadow-sm";

const Projects = () => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a name="projects">
        <main name="projects">
          <h2>PROJECTS</h2>
          <hr />
          <h6>Please note that live demos may take a little while to load.</h6>
          <div className="container">
            <div className="row">
              <div className={COLUMN}>
                <div className={CARD}>
                  <div className="project-image p1 card-img-top"></div>
                  <div className="card-body">
                    <h5 className="card-title">BaseCamp</h5>
                    <p className="card-text">
                      A multi-component dashboard app for coding bootcamp
                      students to keep them organized and on track throughout
                      their program.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://base-camp.netlify.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a
                          href="https://github.com/jyang81/basecamp-react"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                      <medium className="text-muted">More info</medium>
                    </div>
                  </div>
                </div>
              </div>
              <div className={COLUMN}>
                <div className={CARD}>
                  <div className="project-image p2 card-img-top"></div>
                  <div className="card-body">
                    <h5 className="card-title">Green Up! Seattle</h5>
                    <p className="card-text">
                      A game-based waste management education app for the city
                      of Seattle inspired by seeing too many people throw their
                      garbage away in the wrong bin.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://greenupseattle.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a
                          href="https://github.com/jyang81/greenupseattle"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                      <medium className="text-muted">More info</medium>
                    </div>
                  </div>
                </div>
              </div>
              <div className={COLUMN}>
                <div className={CARD}>
                  <div className="project-image p3 card-img-top"></div>
                  <div className="card-body">
                    <h5 className="card-title">React Pictionary</h5>
                    <p className="card-text">
                      Play pictionary online with your friends! This is a
                      realtime drawing game where players draw and guess various
                      words for points. Inspired by my love for drawing, and
                      games such as Yahoo Graffiti and Draw Something.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://react-pictionary.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a
                          href="https://github.com/jyang81/pictionary-react"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                      <medium className="text-muted">More info</medium>
                    </div>
                  </div>
                </div>
              </div>

              <div className={COLUMN}>
                <div className={CARD}>
                  <div className="project-image p4 card-img-top"></div>
                  <div className="card-body">
                    <h5 className="card-title">Demojify</h5>
                    <p className="card-text">
                      Who doesn't love emojis? And who doesn't love puzzles?
                      Well, now you can have the best of both worlds with
                      Demojify! Decrypt fun emoji-based puzzles of various
                      categories like movies, songs, and more!
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://demojify.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a
                          href="https://github.com/jyang81/demojify"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                          role="button"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      </div>
                      <medium className="text-muted">More info</medium>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </a>
    );
};

export default Projects;