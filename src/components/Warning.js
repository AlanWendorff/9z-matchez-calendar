import React from 'react';

const Warning = () => {
    return ( 
        <div className="warning">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img alt="warning, error!" src="https://cdna.artstation.com/p/assets/images/images/028/099/390/large/mariano-tripelhorn-9z-wallpaper-tripelhorn.jpg?1593477185"/>
                    </div>
                    <div className="card-content">
                        <p>Algo ha ocurrido, inténtelo de nuevo más tarde o recargue la página.</p>
                    </div>
                    <div className="card-action">
                        <a className="head-font" rel="noopener noreferrer" target="_blank" href="https://www.hltv.org/team/9996/9z">También puedes consultar los partidos de 9z en HLTV.org</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Warning;