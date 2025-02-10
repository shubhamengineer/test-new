// App.js
import React, { useState } from 'react';
import SideNav from './components/sidenav';
import Home from './components/home';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('Home');

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={styles.container}>
      <SideNav navItems={navItems} onSelectItem={handleSelectItem} />
      <Home selectedContent={selectedItem} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
};

export default App;
