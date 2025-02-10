// MainContent.js
import React from 'react';

const MainContent = ({ selectedContent }) => {
  return (
    <div style={styles.mainContent}>
      <h1>{selectedContent}</h1>
    </div>
  );
};

const styles = {
  mainContent: {
    marginLeft: '220px',
    padding: '20px',
  },
};

export default MainContent;
