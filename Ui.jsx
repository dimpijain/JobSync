import React, { useState } from 'react';
import './Ui.css';

function Ui() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jdFile, setJdFile] = useState(null);
  const [candidates, setCandidates] = useState([]);

  const handleUpload = () => {
    // Dummy data — replace with actual backend call
    const mockCandidates = [
      { name: 'Alice Johnson', score: 92 },
      { name: 'Bob Singh', score: 85 },
      { name: 'Riya Kapoor', score: 78 },
    ];
    setCandidates(mockCandidates);
  };

  return (
    <div className="app">
      <h1>JobSync – Smart Screening</h1>

      <div className="upload-section">
        <div>
          <label>Upload Resume(s):</label>
          <input type="file" multiple onChange={(e) => setResumeFile(e.target.files)} />
        </div>
        <div>
          <label>Upload Job Description:</label>
          <input type="file" onChange={(e) => setJdFile(e.target.files[0])} />
        </div>
        <button onClick={handleUpload}>Match Candidates</button>
      </div>

      <div className="results-section">
        <h2>Matched Candidates</h2>
        {candidates.length > 0 ? (
          <ul>
            {candidates.map((c, index) => (
              <li key={index}>
                <strong>{c.name}</strong> – Match Score: <span>{c.score}%</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matches yet. Upload files and click Match.</p>
        )}
      </div>
    </div>
  );
}

export default Ui;
