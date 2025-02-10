
import React from 'react';

const SideNav = ({ navItems, onSelectItem }) => {
  return (
    <div style={styles.sideNav}>
      <ul style={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} style={styles.navItem} onClick={() => onSelectItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sideNav: {
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    height: '100vh',
    padding: '20px',
    position: 'fixed',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    padding: '10px',
    cursor: 'pointer',
  },
};

export default SideNav;
