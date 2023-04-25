import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

function MyComponent() {
  const background = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: background }}>
    </div>
  );
}

export default MyComponent;