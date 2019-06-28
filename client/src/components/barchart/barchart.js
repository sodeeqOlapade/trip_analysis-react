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

function Barchart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const { male, female, noOfCashTrips, noOfNonCashTrips, ...rest } = data;

        const objects = Object.entries(rest).map(stat => {
          let obj = {};
          obj['name'] = stat[0];
          obj['uv'] = stat[1];
          return obj;
        });

        setData(objects);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <BarChart
      width={600}
      height={150}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="red" width="10px" />
    </BarChart>
  );
}

export default Barchart;
