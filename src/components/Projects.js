import React from 'react';

const COLUMN = "col-md-12 col-lg-6";

const Projects = () => {
    return (
      <a name="projects" href>
        <main name="projects">
          <h2>Projects</h2>
          <h6>
            Please note that live demos may take a few seconds for the first
            load
          </h6>
          <div class="container">
            <div class="row">
              <div class={COLUMN}>
                <div class="card mb-4 shadow-sm">
                  <div className="project-image p1 card-img-top"></div>
                  <div class="card-body">
                    <h5 className="card-title">BaseCamp</h5>
                    <p class="card-text">
                      A multi-component dashboard app for coding bootcamp
                      students to keep organized and on track throughout their
                      program.
                    </p>
                    <p class="card-text">
                      Built with React on a Rails backend with a Postgres db.
                      Styled with Semantic UI.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          <i class="fa fa-external-link" aria-hidden="true"></i> Demo
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          <i class="fa fa-github" aria-hidden="true"></i> GitHub
                        </button>
                      </div>
                      <small class="text-muted">•••</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class={COLUMN}>
                <div class="card mb-4 shadow-sm">
                  <div className="project-image p2 card-img-top"></div>
                  <div class="card-body">
                    <h5 className="card-title">Green Up! Seattle</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class={COLUMN}>
                <div class="card mb-4 shadow-sm">
                  <div className="project-image p3 card-img-top"></div>
                  <div class="card-body">
                    <h5 className="card-title">React Pictionary</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class={COLUMN}>
                <div class="card mb-4 shadow-sm">
                  <div className="project-image p4 card-img-top"></div>
                  <div class="card-body">
                    <h5 className="card-title">Demojify</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
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