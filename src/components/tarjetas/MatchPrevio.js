import React from 'react';
import Moment from 'moment';


const MatchPrevio = ({prevMatch, DataMatchPast}) => {
    if (prevMatch.length > 0){

        const {Mapas, opponentPoint, ownPoint} = DataMatchPast; 

        Moment.updateLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
        });

        let modalidad = "";
        let classCardContainer = "";
        let classTeamA = "";
        let classTeamB = "";
        let classPointA = "";
        let classPointB = "";
        let opponentLogo = "";
        let opponentName = "";
        let ownName = "";
        let ownLogo = "";
        let ultimoMatch = prevMatch[0];
        
        for (let i=0; i< ultimoMatch.opponents.length; i++){                        // get EVER the opponent team logo (pandascore object index of opponent logo team are irregular)
            if (ultimoMatch.opponents[i].opponent.id !== 126709){
                opponentLogo = ultimoMatch.opponents[i].opponent.image_url;
                opponentName = ultimoMatch.opponents[i].opponent.name;
            }else{
                ownLogo = ultimoMatch.opponents[i].opponent.image_url;
                ownName = ultimoMatch.opponents[i].opponent.name;
            }
        };      

        if (ultimoMatch.winner_id === 126709){
            classCardContainer = "card posicion-tarjeta tamano-tarjeta-previo container-prev-match" + " outline-shade-winner";
            classTeamA  = "match-loser"  + " team-A";
            classPointA = "match-loser"  + " point-A";
            classTeamB  = "match-winner" + " team-B";
            classPointB = "match-winner" + " point-B";

        }else{
            classCardContainer = "card posicion-tarjeta tamano-tarjeta-previo container-prev-match" + " outline-shade-loser";
            classTeamA  = "match-winner" + " team-A";
            classPointA = "match-winner" + " point-A";
            classTeamB  = "match-loser"  + " team-B";
            classPointB = "match-loser"  + " point-B";
        };

        if (ultimoMatch.number_of_games === 1){                                     // show the BO1 BO3 BO5
            modalidad = "Mejor de 1";
        }else if(ultimoMatch.number_of_games === 3){
            modalidad = "Mejor de 3";
        }else if(ultimoMatch.number_of_games === 5){
            modalidad = "Mejor de 5";
        }

        if(document.readyState === 'complete'){
            return(
                <div className={classCardContainer}> 
                    <div className="card-image waves-effect waves-block waves-light">

                    <div className="card-image container-info cursor-default">

                        <div className={classTeamA}>                            
                            <img alt="a team" className="max-size-team-logo-prev-match" src={opponentLogo}/>
                            <p className="label-teams text-center">{opponentName}</p> 
                        </div> 

                        <div>
                            <div className="points text-center">
                                <p className={classPointA}>{opponentPoint}</p>
                                <p>:</p>
                                <p className={classPointB}>{ownPoint}</p>                           
                            </div> 

                            <p className="modalidad-past-match">{modalidad}</p> 
                        </div>   
                        
                        <div className={classTeamB}>
                            <img alt="b team" className="max-size-team-logo-prev-match" src={ownLogo}/>
                            <p className="label-teams text-center">{ownName}</p>
                        </div> 
                    </div>            
                    
                    </div>
                    <div className="card-content click-more-info activator cursor-pointer">
                        <span className="head-font"><i className="material-icons right">info</i></span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <p className="text-align cursor-default font-size">
                            <span className="label-data-style margin-entre-label-contenido">Mapas:</span> 
                            {Mapas}
                        </p>

                        <p className="text-align cursor-default font-size">
                            <span className="label-data-style margin-entre-label-contenido">Torneo:</span> 
                            {ultimoMatch.league.name +" "+ ultimoMatch.serie.full_name}
                        </p>
                        
                        <p className="text-align cursor-default font-size">
                            <span className="label-data-style margin-entre-label-contenido">Partido:</span> 
                            {ultimoMatch.name}
                        </p>
                                                        
                        <p className="text-align label-fecha cursor-default font-size">
                            <span className="label-data-style margin-entre-label-contenido">Se jugó el: </span>
                            <span>{Moment(ultimoMatch.begin_at).format('Do')} de {Moment(ultimoMatch.begin_at).format('MMMM - H:mm')} hs</span>      
                        </p>
                    </div>
                </div>
            );
        }else{

            return(
                <div className="preloader-wrapper small active posicion-tarjeta spinner-loader">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }else{
        return(
            <div className="preloader-wrapper small active posicion-tarjeta spinner-loader">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        );
    };
}
 
export default MatchPrevio;