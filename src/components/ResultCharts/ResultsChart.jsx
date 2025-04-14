import React, { use } from 'react';

const ResultsChart = ({ resutlPromise }) => {
    const resultsData = use(resutlPromise); 
    console.log(resultsData);
    return (
        <div>
            Hello
        </div>
    );
};

export default ResultsChart;