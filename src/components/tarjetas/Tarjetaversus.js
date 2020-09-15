import React from 'react';
import Moment from 'moment';



const Tarjetaversus = ({match}) => {
    //console.log(match);
    const {opponents, league, begin_at, name, serie, number_of_games, tournament, status, live_url} = match; 

    Moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
    });

    let opponentLogo = "";
    let modalidad = "";
    let hoy = "";
    let statusStream = "Streaming inactivo";
    let active = false;
    let diaUsuario = new Date().getDate();
    let diaMatch = parseInt(Moment(begin_at).format('D'));

    for (let i=0; i< opponents.length; i++){                        // get EVER the opponent team logo (pandascore object index of opponent logo team are irregular)
        if (opponents[i].opponent.id !== 126709){
            opponentLogo = opponents[i].opponent.image_url;
        }
    };
 
    if (number_of_games === 1){                                     // show the BO1 BO3 BO5
        modalidad = "Mejor de 1";
    }else if(number_of_games === 3){
        modalidad = "Mejor de 3";
    }else if(number_of_games === 5){
        modalidad = "Mejor de 5";
    }

    if (diaUsuario === diaMatch){                                   // get day of the PC user and compare of the day match to show "Today!"
        hoy = "Hoy!";                                               
        if (status === "running"){                                  // if the status is running the status stream change to "Stream in live!"
            statusStream = "Streaming en vivo!";
            active = true;
        }
    }
    if(document.readyState === 'complete'){

        return(
            <div className="col s12 m7 posicion-tarjeta">
                <div className="card horizontal  tamano-tarjeta">
                    <div className="card-image lienzo-logo">   
                        <img alt="versus team" className="max-size-team-logo" src={opponentLogo}/> 
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            
                            <a className="text-center head-font" rel="noopener noreferrer" target="_blank" href={league.url}> {league.name+" "+serie.full_name} </a>
                            <p className="text-center cursor-default font-size">{name}</p>
                            
                            <p className="text-align cursor-default font-size">
                                <span className="label-data-style margin-entre-label-contenido">Fase:</span> 
                                {tournament.name}
                            </p>
                            
                            <p className="text-align cursor-default font-size">
                                <span className="label-data-style margin-entre-label-contenido">Fecha: </span>
                                <span>{Moment(begin_at).format('Do')} de {Moment(begin_at).format('MMMM - H:mm')} hs  <span className="hoy-color">{hoy}</span> </span> 
                            </p>
                            
                            <p className="text-align cursor-default font-size">
                                <span className="label-data-style margin-entre-label-contenido">Modalidad:</span> 
                                {modalidad}
                            </p>
                        
                        </div>
                        <div className="card-action padding-streaming-box">
                            {active? 
                            <a className="stream-font-color-LIVE" rel="noopener noreferrer" target="_blank" href={live_url}> {statusStream} <span className="dot-indicator"></span></a>
                            :
                            <a className="stream-font-color-not-live cursor-default" href="/#">{statusStream}</a>
                            }
                        </div>
                    </div>
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
}

export default Tarjetaversus;