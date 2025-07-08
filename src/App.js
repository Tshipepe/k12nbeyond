import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    location: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs([...jobs, formData]);
    setFormData({ title: '', organization: '', location: '', category: '', description: '' });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <header className="bg-blue-800 text-white p-6 rounded-md shadow mb-6">
        <h1 className="text-4xl font-bold">K12nBeyond</h1>
        <p className="text-lg mt-2">Explore teaching and education careers across public, charter, private, and college institutions.</p>
      </header>

      {/* Post a Job Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required />
          <input type="text" name="organization" placeholder="School/Organization" value={formData.organization} onChange={handleChange} className="p-2 border rounded" required />
          <input type="text" name="location" placeholder="Location (City, State)" value={formData.location} onChange={handleChange} className="p-2 border rounded" required />
          <select name="category" value={formData.category} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Category</option>
            <option value="Public School">Public School</option>
            <option value="Private School">Private School</option>
            <option value="Charter School">Charter School</option>
            <option value="College">College/University</option>
            <option value="Tutorial">Tutorial Business</option>
          </select>
        </div>
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded mt-4" rows="4" required></textarea>
        <button type="submit" className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Post Job</button>
      </form>

      {/* Job Listings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No job postings yet. Be the first to add one!</p>
        ) : (
          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <div key={index} className="p-4 bg-white border rounded shadow">
                <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
                <p className="text-gray-700 italic">{job.organization}</p>
                <p className="text-gray-600">{job.location}</p>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 text-sm rounded">{job.category}</span>
                <p className="mt-2 text-sm text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 K12nBeyond. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
