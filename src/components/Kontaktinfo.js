import './Section.css';
import './Kontaktinfo.css';

function Kontaktinfo(props) {
  return (
    <div className="kontakt" ref={props.secref}>
        <h3 className='kontakttittel'>Kontakt</h3>
      <div className="kontaktpersoner">
        <div className="kontaktinfo">
                <h4 className='navn'>Preben:</h4>
                <a href="mailto:preben.zahl@gmail.com
                " target="_blank" rel="noreferrer">Mail</a>
                <a href="tel:93271107" target="_blank" rel="noreferrer">Telefon</a>
        </div>
        <div className="kontaktinfo">
            <h4 className='navn'>Ane:</h4>
            <a href="mailto:ane.moen.mahlum@gmail.com" target="_blank" rel="noreferrer">Mail</a>
            <a href="tel:90712524" target="_blank" rel="noreferrer">Telefon</a>
        </div>
      </div>
    </div>
    );
}

export default Kontaktinfo;