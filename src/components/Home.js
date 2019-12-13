import React from 'react';

const Home = () => {
    return (
      <main className="light-bg" id="home">
        <img src="myAvatar.png" alt="avatar" className="mainimage" />
        <br />
        <h1>Joe Yang</h1>
        <hr />
        <h4>Software Developer + Graphic Designer</h4>
        <br />
        <div>
          <button className="btn btn-primary"><i className="far fa-file-alt"></i> Download Resume</button>
        </div>
      </main>
    );
};

export default Home;