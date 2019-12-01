import React from 'react';


const Nav = () => {
    return (
        <nav>
            <div id="name">
                <a href="#home"><img src="logo512.png" className="logo" alt="Joe Yang logo" /></a>
                {/* <span>Joe Yang</span> */}
            </div>
            <div>
                <a href="#about">About</a> 
                <a href="#projects">Projects</a> 
                <a href="#tech">Technologies</a> 
                <a href="#contact">Contact</a> 
                <a href="javascript:void(0);" class="icon" >
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </nav>
    )
}

export default Nav;