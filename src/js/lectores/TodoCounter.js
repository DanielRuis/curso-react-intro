import { PieChart } from '@mui/x-charts/PieChart';

import React, { useContext } from 'react';
import { Context } from '../Context/TodoContex';

function TodoCounter(){
    const {
        completados,
        restantes,
        total,
        setStateNew,
        stateNew
    }= React.useContext(Context);
    return(

        <div className="contadorCampo">
            <PieChart
                colors={['cyan', '#10606b']}
                series={[
                {   
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 70, additionalRadius: -40, color: 'gray' },
                    paddingAngle: 0,
                    innerRadius: 90,
                    outerRadius: 150,
                    data:[
                        { label: 'Realizados', value: completados },
                        { label: 'Restantes', value:restantes }
                    ]
                },

                ]}
                
                margin={{ right: 0 }}
                width={400}
                height={400}
                legend={{ hidden: true }}
            />
            <h1>
            Haz completado {completados} de {total}
            </h1>
            <button className='botonNew' id='newBoton' onClick={()=>{
                setStateNew(!stateNew)
            }}>Nueva tarea</button>
        </div>
    ); 
}

export {TodoCounter};