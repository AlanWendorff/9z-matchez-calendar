import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const TarjetaInformativa = () => {
    return ( 
        <div className="container-tarjeta-instagram posicion-tarjeta">
            <p className="NO-matches cursor-default">En este momento no se encuentran partidos registrados en la base de datos.</p>
            <div className="info-card">
                <InstagramEmbed
                    url='https://www.instagram.com/p/CEm78qslr2-/'
                    maxWidth={600}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />
            </div>        
        </div>
        
     );
}
 
export default TarjetaInformativa;