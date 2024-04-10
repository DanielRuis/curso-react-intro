import { PieChart } from '@mui/x-charts/PieChart';
function TodoCounter(props){
    return(
        <div className="contadorCampo">
            <PieChart
                colors={['cyan', 'indigo']}
                series={[
                {   
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 70, additionalRadius: -40, color: 'gray' },
                    paddingAngle: 0,
                    innerRadius: 90,
                    outerRadius: 150,
                    data:[
                        { label: 'Realizados', value: props.completados },
                        { label: 'Total', value: props.total }
                    ]
                },

                ]}
                
                margin={{ right: 0 }}
                width={400}
                height={400}
                legend={{ hidden: true }}
            />
            <h1>
            Haz completado {props.completados} de {props.total}
            </h1>
        </div>
    ); 
}

export {TodoCounter};