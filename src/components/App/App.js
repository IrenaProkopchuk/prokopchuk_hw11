import Modal from '../Modal/Modal';
import Portal from '../Portal/Portal';
import { ThemeContext } from '../ThemeContext/ThemeContext';

import './App.css';
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('green');

  const handleClick = () => {
    setBackground(background === 'green' ? 'yellow' : 'green');
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>Modal window</h1>

      <p>
        <button onClick={() => setShowModal(!showModal)}>
          Show modal
        </button>
      </p>

      {showModal && (
        <Portal>
          <Modal onClose={() => setShowModal(false)} />
        </Portal>
      )}

      <ThemeContext.Provider value={background}>
        <div style={{ backgroundColor: background }}>
          <button onClick={handleClick}>Change background color</button>
        </div>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
