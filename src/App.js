import oppstilt from './images/oppstilt.jpg';
import './App.css';
import Intro from './components/Intro';
import Hvor from './components/Hvor';
import {useRef} from 'react';
import Navbar from './components/navbar';
import Dagen from './components/Dagen';
import Kontaktinfo from './components/Kontaktinfo';
import Overnatting from './components/Overnatting';
import Forside from './components/Forside';
import Svar from './components/Svar';
import Onsker from './components/onsker';

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
  const refOnsker = useRef(null);

  return (
    <div className="App" >
      {/* <Forside></Forside> */}
      <div className='title'>
        Ane og Preben
      </div>
      <div className='subtitle'>
        23. juli 2023
      </div>
      <Navbar refIntro={refIntro} refHvor={refHvor} refDagen={refDagen} refKontakt={refKontakt} />
      <img src={oppstilt} alt="ane og preben har det fint" style={imageStyles} />
      <Intro />
      <Svar/>
      <Hvor secref={refHvor} />
      <Dagen secref={refDagen} />
      <Overnatting secref={refOvernatting}/>
      <Onsker secref={refOnsker}/>
      <Kontaktinfo secref={refKontakt}/>
    </div>
  );
}

export default App;
