import React from 'react';
import TestComponent from '../TestComponent/TestComponent';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <TestComponent />
    </div>
  );
}

export default App;
