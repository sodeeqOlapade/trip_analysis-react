import React, { useState, useEffect } from 'react';
const Recharts = require('recharts');

const { PieChart, Pie, Legend, Tooltip } = Recharts;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

function Piechart(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const graphData = props.dataForGraph.map((prop, index) => {
          const obj = {};
          obj['name'] = prop;
          obj['value'] = data[prop];
          return obj;
        });

        setData(graphData);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);
  return (
    <PieChart width={500} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default Piechart;

// import React, { useState, useEffect } from 'react';
// const Recharts = require('recharts');
// const { PieChart, Pie, Sector, Cell } = Recharts;
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? 'start' : 'end'}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// function Piechart(props) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/api/stats')
//       .then(response => {
//         return response.json();
//       })
//       .then(({ data }) => {
//         const graphData = props.dataForGraph.map((prop, index) => {
//           const obj = {};
//           obj['name'] = prop;
//           obj['value'] = data[prop];
//           return obj;
//         });

//         setData(graphData);
//       })
//       .catch(err => {
//         console.log(`Error: ${err}`);
//       });
//   }, []);

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={data}
//         cx={300}
//         cy={200}
//         labelLine={true}
//         label={renderCustomizedLabel}
//         outerRadius={80}
//         fill="#8884d8"
//       >
//         {data.map((entry, index) => (
//           <Cell fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }

// export default Piechart;
