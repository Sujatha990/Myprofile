import React from 'react';

const ResumeButton = () => {
  const downloadResume = () => {
    // Replace 'resume.pdf' with the path to your resume file
    const resumeUrl = '/path/to/your/resume.pdf';
    // Open the resume file in a new window/tab
    window.open(resumeUrl, '_blank');
  };

  return (
    <button onClick={downloadResume}>
      Download Resume
    </button>
  );
};

export default ResumeButton;