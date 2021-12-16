import React from 'react';

const CodeEditorHeader: React.FC<{ handleOpen: () => void; name: string }> = ({ handleOpen, name }) => {
  return (
    <header className="card-header">
      <p className="card-header-title is-dark">{name}</p>
      <button onClick={handleOpen} className="card-header-icon" aria-label="more options">
        <span>show/hide more</span>
      </button>
    </header>
  );
};

export default CodeEditorHeader;
