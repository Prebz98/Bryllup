import './Section.css';

function Svar(props) {
  return (
    <div className="section">
        <h2 className='section-title'>Svar på invitasjon</h2>
        <div className="section-text">
            <p>Svar utbedes innen 1. april. Du kan svare på melding til en av oss. 
            </p>
            <p>Preben: <a href="tel:93271107" target="_blank" rel="noreferrer">93271107</a>, Ane: <a href="tel:90712524" target="_blank" rel="noreferrer">90712524</a></p>
        </div>
    </div>
  );
}

export default Svar;