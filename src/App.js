// File: src/App.js
import React, { useState } from 'react';

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">K12nBeyond Job Board</h1>

      {/* Post a Job Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Post a Job</h2>
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="organization" placeholder="School/Organization" value={formData.organization} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="location" placeholder="Location (State)" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Category</option>
          <option value="Public School">Public School</option>
          <option value="Private School">Private School</option>
          <option value="Charter School">Charter School</option>
          <option value="College">College/University</option>
          <option value="Tutorial">Tutorial Business</option>
        </select>
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post Job</button>
      </form>

      {/* Job Listings */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
        {jobs.length === 0 ? (
          <p>No job postings yet.</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="border-b py-4">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p><strong>Organization:</strong> {job.organization}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Category:</strong> {job.category}</p>
              <p>{job.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

