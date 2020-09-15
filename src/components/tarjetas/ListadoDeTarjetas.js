import React, { Fragment } from 'react';
import Tarjetaversus from './Tarjetaversus';

const ListadoDeTarjetas = ({matches}) => {
    if (!matches.length > 0) return null;
    return ( 
        <Fragment> 
            {matches.map(match => ( 
                <Tarjetaversus 
                    key={match.name}
                    match={match}
                />
        ))}
        </Fragment> 
     );
}
 
export default ListadoDeTarjetas;