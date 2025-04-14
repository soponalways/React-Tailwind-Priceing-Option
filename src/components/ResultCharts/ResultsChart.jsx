import React, { use } from 'react';
import { Bar, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


function CustomTooltip(data) {
    // console.log(data);
    const { payload, label, active } = data; 
    // console.log(payload)
    // console.log(label);
    // console.log(active);
    if (active) {
        return (
            <div className="bg-amber-50 px-4 py-3 rounded-xl shadow-xl shadow-black/50">
                <h3 className='text-3xl font-bold'>{label}</h3>
                <div className='flex flex-col'>
                    {
                        payload.map((item, i) => <div key={i}>
                            <p style={{color: `${item.color}`}}>{`${item.dataKey} : ${item.value}`}</p>
                        </div>)
                    }
                    {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
                </div>
                <p className="desc">{`This is the Result of ${label}`}</p>
            </div>
        );
    }
}

const ResultsChart = ({ resutlPromise }) => {
    const resultsData = use(resutlPromise); 
    // console.log(resultsData);
    return (
        <div>
            <LineChart width={600} height={600} data={resultsData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip content={<CustomTooltip/>}></Tooltip>
                <Line dataKey={"physics"} stroke='green'></Line>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"chemistry"} stroke='blue'></Line>
                <Line dataKey={"english"}></Line>
                <Line dataKey={"science"} stroke='purple'></Line>
                <CartesianGrid stroke='#ccc' strokeDasharray={"5 5"}></CartesianGrid>
            </LineChart>
        </div>
    );
};

export default ResultsChart;