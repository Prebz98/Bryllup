import frontpage from './images/frontpage.jpg';
import './App.css';
import Intro from './components/Intro';
import Hvor from './components/Hvor';
import {useRef} from 'react';
import Navbar from './components/navbar';
import Dagen from './components/Dagen';
import Kontaktinfo from './components/Kontaktinfo';
import Overnatting from './components/Overnatting';

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
  const refKontakt = useRef(null);
  const refOvernatting = useRef(null);

  return (
    <div className="App" >
      <div className='title'>
        Ane og Preben
      </div>
      <div className='subtitle'>
        23. juli 2023
      </div>
      <Navbar refIntro={refIntro} refHvor={refHvor} refDagen={refDagen} refKontakt={refKontakt} />
      <img src={frontpage} alt="ane og preben har det fint" style={imageStyles} />
      <Intro />
      <Hvor secref={refHvor} />
      <Dagen secref={refDagen} />
      <Overnatting secref={refOvernatting}/>
      <Kontaktinfo secref={refKontakt}/>
    </div>
  );
}

export default App;
