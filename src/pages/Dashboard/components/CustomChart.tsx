import { CartesianGrid, Bar, BarChart, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';

interface IData {
  name: string,
  online: number,
  income: number,
  amt: number
}
const customData: IData[] = [
  {
    "name": "Mon",
    "online": 4000,
    "income": 1200,
    "amt": 2400
  },
  {
    "name": "Tue",
    "online": 3000,
    "income": 798,
    "amt": 2210
  },
  {
    "name": "Wed",
    "online": 2000,
    "income": 4900,
    "amt": 2290
  },
  {
    "name": "Thu",
    "online": 2780,
    "income": 1808,
    "amt": 2000
  },
  {
    "name": "Fri",
    "online": 1890,
    "income": 2400,
    "amt": 2181
  },
  {
    "name": "Sat",
    "online": 2390,
    "income": 1900,
    "amt": 2500
  },
  {
    "name": "Sun",
    "online": 3490,
    "income": 2150,
    "amt": 2100
  }
]

const CustomChart = () => {
  return (
      <div className="chart-card single-card">
        <div className="chart-card-header">
          <h2 className='title'>User activity</h2>
        </div>
        <div className='chart-card-content'>
          <ResponsiveContainer >
            <BarChart data={customData} >
              <CartesianGrid />
              <XAxis dataKey="name" tick={{fontSize: 14,  stroke: '#000', strokeWidth: .4}} axisLine={{stroke: '#000', strokeWidth: .5}} />
              <YAxis  tick={{fontSize: 14,  stroke: '#000', strokeWidth: .4}} axisLine={{stroke: '#000', strokeWidth: .5}} />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#ffce56" />
              <Bar dataKey="online" fill="#4bc0c0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
}

export default CustomChart;
