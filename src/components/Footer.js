import React from 'react';

const fecha = new Date().getFullYear();

const Footer = () => {
    return ( 
        <footer className="footer-container">
            <div>
                <p className="position-derechos cursor-default">All Rights Reserved. {fecha}</p>
                <p className="position-aclaraciones cursor-default">Made it with the PandaScore Free plan API (pandascore.co)</p>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Kremowy" className="style-firma">By KremoWy</a>
            </div>
            <p className="position-agradecimientos cursor-default">Acknowledgements:</p>
            <p className="position-agradecimientos cursor-default"> - Raka26 - Mariano Tripelhorn (Designer of "error" banner) </p>
        </footer>
     );
}

export default Footer;

/*
        

*/