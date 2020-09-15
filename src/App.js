import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Header from './components/Header';
import ListadoDeTarjetas from './components/tarjetas/ListadoDeTarjetas';
import MatchPrevio from './components/tarjetas/MatchPrevio';
import Footer from './components/Footer';
import Warning from './components/Warning';
import TarjetaInformativa from './components/tarjetas/TarjetaInformativa';
import LoadScreen from './components/LoadScreen';

function App() {  
  
  const [matches, guardarMatches] = useState([]);
  const [crash, guardarStateCrash]   = useState(false);
  const [NoMatches, guardarNoMatches]   = useState(false);
  const [prevMatch, guardarPrevMatch] = useState([]);
  const [DataMatchPast, guardarDataMatchPast] = useState([]);

  useEffect(() => {  
    
    var firebaseConfig = {
      apiKey: "AIzaSyCwVSZ_3nm0FknhJ-8S5aT6iMyi4lu4vto",
      authDomain: "zez-f8486.firebaseapp.com",
      databaseURL: "https://zez-f8486.firebaseio.com",
      projectId: "zez-f8486",
      storageBucket: "zez-f8486.appspot.com",
      messagingSenderId: "403629762497",
      appId: "1:403629762497:web:805e910de4aeff58503140",
      measurementId: "G-ELE1QMFXQG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    const database = firebase.database();
    let refDataMatchPast = database.ref('DataMatchPast');
    refDataMatchPast.on('value', gotDataMatchPast, errData);
  
    function gotDataMatchPast(data){
      let firebaseProyectDataCloud = data.val(); 
      guardarDataMatchPast(firebaseProyectDataCloud);
    };
  
    function errData(err){
      console.log(err);
    };

    const consultarAPI = async () => {                   //126709 9zTeam id         
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';                                                                                         //          --- FREE PLAN TOKEN register on pandascore.co and get your free token ---                      
      const urlUpcoming = 'https://api.pandascore.co/teams/126709/matches?videogame=cs-go&sort=begin_at&filter[finished]=false&filter[draw]=false&filter[forfeit]=false&token=yVPKLDCsTsxGSJcEWb_gbzDiC6NSWVQ3thriZ3Qft_p6lGvLxPc';
      const urlPast = 'https://api.pandascore.co/teams/126709/matches?videogame=cs-go&filter[finished]=true&token=yVPKLDCsTsxGSJcEWb_gbzDiC6NSWVQ3thriZ3Qft_p6lGvLxPc';
      try {
        const respuestaUpcoming = await fetch(proxyUrl + urlUpcoming);
        const respuestaPast = await fetch(proxyUrl + urlPast);        
        if (respuestaUpcoming.status !== 200 || respuestaPast.status !== 200){
          guardarStateCrash(true);
        };
        const objetoMatchesUpcoming = await respuestaUpcoming.json();
        const objetoPrevMatch = await respuestaPast.json();
        guardarMatches(objetoMatchesUpcoming); 
        guardarPrevMatch(objetoPrevMatch); 

      } catch (error) {
        guardarStateCrash(true);      
      };      
    };
    if(!matches.length > 0){                       // validates the content of the request to stop the request 
      consultarAPI(); 
      guardarNoMatches(true);
    };                                             
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // RETURN APP

  if(document.readyState === 'complete'){
    if (crash !== true){
      return(
        <div className="parametros-container mosaico">
          <Header/>                                                                                                                                 
          <MatchPrevio
            prevMatch={prevMatch}
            DataMatchPast={DataMatchPast}
          />
          <hr/> 

          {NoMatches?
            <TarjetaInformativa/>
          :
            <ListadoDeTarjetas
              matches={matches}
            />   
          }
          <Footer/>
        </div>
      );
    }else{
      return(
        <div className="parametros-container mosaico">
          <Header/>                                                                                                                                        
          <Warning/>       
          <Footer/>
        </div>
      );
    };   
  }else{                                               // RETURN APP LOADING  <Footer/>
    return (
      <div className="parametros-container mosaico">
        <Header/>
        <LoadScreen/>
      </div>
    );  
  };
}

export default App;
