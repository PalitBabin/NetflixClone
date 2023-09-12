import "./chart.css";
import PropTypes from "prop-types";

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
    
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
         {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={"5 5"}/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Chart.propTypes = {
    title:PropTypes.string,
    data:PropTypes.array,
    dataKey:PropTypes.string,
    grid:PropTypes.bool,
}
export default Chart;