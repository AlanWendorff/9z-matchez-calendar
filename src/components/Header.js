import React from 'react';
import logo from './logot.png';

const Header = () => {
    return ( 
        <div> 
            <div className="todo-violeta z-depth-5">
                <a rel="noopener noreferrer" target="_blank" href="https://www.hltv.org/team/9996/9z">    
                    <img className="logo-header" alt="9z Team Logo" src={logo}/>       
                </a> 
            </div>   
        </div>

            
     );
}
    
export default Header;