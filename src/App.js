import frontpage from './images/frontpage.jpg';
import './App.css';
import Intro from './components/Intro';
import Hvor from './components/Hvor';
import {useRef} from 'react';
import Navbar from './components/navbar';
import Dagen from './components/Dagen';

const imageStyles = {
  maxWidth: '90%',
  maxHeight: '500px',
  height: 'auto',
  border: '5px solid white',
  borderRadius: '10%',
  // marginTop: '20px',
};

function App() {
  const refIntro = useRef(null);
  const refHvor = useRef(null);
  const refDagen = useRef(null);

  return (
    <div className="App" >
      <div className='title'>
        Ane og Preben
      </div>
      <Navbar refIntro={refIntro} refHvor={refHvor} refDagen={refDagen} />
      <img src={frontpage} alt="ane og preben har det fint" style={imageStyles} />
      <Intro />
      <Hvor secref={refHvor} />
      <Dagen secref={refDagen} />
    </div>
  );
}

export default App;
