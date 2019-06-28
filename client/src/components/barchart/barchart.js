import React, { useState, useEffect } from 'react';
const Recharts = require('recharts');
const {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} = Recharts;

function Barchart(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const graphData = props.dataForGraph.map(prop => {
          const obj = {};
          obj['name'] = prop;
          obj['uv'] = data[prop];
          return obj;
        });

        setData(graphData);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#4087f5" barSize={30} />
    </BarChart>
  );
}

export default Barchart;
