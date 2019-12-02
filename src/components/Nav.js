import React from 'react';


const Nav = () => {
    return (
        <nav>
            
            <a href="#home"><img src="logo192.png" className="logo" alt="Joe Yang logo" /></a>
        
            
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