import React from 'react';
import './App.css';

const jobs = [
  { id: 1, title: 'Math Teacher – Texas Public School', location: 'Houston, TX', type: 'Public School' },
  { id: 2, title: 'Reading Tutor – Private Company', location: 'Dallas, TX', type: 'Tutorial Business' },
  { id: 3, title: 'Adjunct Professor – State College', location: 'Austin, TX', type: 'College' },
];

function App() {
  return (
    <div className="job-board">
      <h1>K12nBeyond Job Board</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job">
          <h2>{job.title}</h2>
          <p>{job.location}</p>
          <p><strong>{job.type}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default App;
