import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import CoustomTooltip from './CoustomTooltip';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise); 
    const marksData = marksDataRes.data; 
    // console.log(marksData);

    // Data Processing are here 
    const marksChartData = marksData.map(markData => {
        const studentsMarks = {
            id: markData.student_id, 
            name : markData.name, 
            math : markData.marks.math, 
            science : markData.marks.science, 
            english : markData.marks.english, 
            physics : markData.marks.physics, 
            chemistry : markData.marks.chemistry
        }; 
        return studentsMarks; 
    }); 
    // console.log(marksChartData);
    return (
        <div className='mx-auto bg-accent py-10 px-5'>
            <BarChart width={1280} height={400} data={marksChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip content={<CoustomTooltip></CoustomTooltip>}></Tooltip>
                <CartesianGrid strokeDasharray={"5 5"} stroke='black' />
                <Bar dataKey={"math"} fill='green'></Bar>
                <Bar dataKey={"science"} fill="red"></Bar>
                <Bar dataKey="english" fill="blue"></Bar>
                <Bar dataKey="physics" fill='purple'></Bar>
                <Bar dataKey='chemistry' fill='yellow' />
            </BarChart>
        </div>
    );
};

export default MarksChart;