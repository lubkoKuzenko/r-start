import React, { useState } from 'react';
import { Bar, BarChart, Line, LineChart } from 'recharts';


const StaticBlocks = () => {
  const [usersOnline] = useState(Math.round(Math.random() * 1000));
  const [newcomer] = useState(Math.round(Math.random() * 500));
  const [income] = useState(Math.round(Math.random() * (10000 - 1000) + 1));
  const classses = usersOnline < 333 ? 'progress is-primary is-small' : usersOnline < 666 ? 'progress is-warning is-small' : 'progress is-danger is-small'
 
  return (
    <>
      <div className="notification is-info">
        <h2 className="title">{usersOnline}</h2>
        <h3 className="block">Users online</h3>
        <progress className={classses} value={usersOnline} max={1000}></progress>
        <span className="edit-btn icon">
          <i className="fas fa-cog"></i>
        </span>
      </div>

      <div className="notification is-success">
        <h2 className="title">+{newcomer}</h2>
        <h3 className="block">Newcomer</h3>
        <div className="chart">
          <LineChart width={300} height={100} data={[{ a: 12 }, { a: 28 }, { a: 11 }, { a: 15 }, { a: 36 }]}>
            <Line type="monotone" dataKey="a" stroke="#1da85c" strokeWidth={4} />
          </LineChart>
        </div>
        <span className="edit-btn icon">
          <i className="fas fa-cog"></i>
        </span>
      </div>

      <div className="notification is-warning">
        <h2 className="title">+ ${income}</h2>
        <h3 className="block">Monthly income</h3>
        <div className="chart">
          <BarChart width={300} height={100} data={[{ a: 12 }, { a: 15 }, { a: 17 }, { a: 15 }, { a: 22 }]}>
            <Bar type="monotone" dataKey="a" barSize={35} fill="#e4bd77" />
          </BarChart>
        </div>
        <span className="edit-btn icon">
          <i className="fas fa-cog"></i>
        </span>
      </div>
    </>
  );
};

export default StaticBlocks;
