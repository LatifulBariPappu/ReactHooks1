import { useState } from 'react';
import MyComponent from './Component/MyComponent';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div>{show && < MyComponent/>}</div>
      <p>
        <button  type='button' onClick={()=>setShow((preShow)=>!preShow)}>
          {show ? 'Hide post' : 'Show post'}
        </button>
      </p>
    </div>
  );
}

export default App;
