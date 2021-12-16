import { useState } from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from 'recharts';

const StaticBlocks = () => {
  const [usersOnline] = useState<number>(Math.round(Math.random() * 1000));
  const [newcomer] = useState<number>(Math.round(Math.random() * 500));
  const [income] = useState<number>(Math.round(Math.random() * (10000 - 1000) + 1));
  const classes = usersOnline < 333 ? 'progress is-primary is-small' : usersOnline < 666 ? 'progress is-warning is-small' : 'progress is-danger is-small'
 
  return (
    <div className='static-blocks'>
      <div className="notification is-info single-card">
        <h2 className="title">{usersOnline}</h2>
        <h3 className="block">Users online</h3>
        <progress className={classes} value={usersOnline} max={1000}></progress>
      </div>

      <div className="notification is-success single-card">
        <h2 className="title">+{newcomer}</h2>
        <h3 className="block">Newcomer</h3>
        <div className="chart">
          <ResponsiveContainer width='100%' height={50}>
            <LineChart  data={[{ a: 12 }, { a: 28 }, { a: 11 }, { a: 15 }, { a: 36 }]}>
              <Line type="monotone" dataKey="a" stroke="#1da85c" dot={false} strokeWidth={4} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="notification is-warning single-card">
        <h2 className="title">+ ${income}</h2>
        <h3 className="block">Monthly income</h3>
        <div className="chart">
          <ResponsiveContainer width='100%' height={50}>
            <BarChart data={[{ a: 12 }, { a: 15 }, { a: 17 }, { a: 15 }, { a: 22 }]}>
              <Bar type="monotone" dataKey="a" barSize={35} fill="#e4bd77" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StaticBlocks;
