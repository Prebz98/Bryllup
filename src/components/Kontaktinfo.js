import './Section.css';
import './Kontaktinfo.css';

function Kontaktinfo(props) {
  return (
    <div className="kontakt" ref={props.secref}>
        <h3 className='kontakttittel'>Kontakt</h3>
      <div className="kontaktpersoner">
        <div className="kontaktGruppe">
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
        <div className="kontaktGruppe">
          <div className="kontaktinfo">
              <h4 className='navn'>Toastmaster:</h4>
              Anders-Kristian
              <a href="mailto:Anderskristian98@gmail.com" target="_blank" rel="noreferrer">Mail</a>
              <a href="tel:48341278" target="_blank" rel="noreferrer">Telefon</a>
          </div>
          <div className="kontaktinfo">
              <h4 className='navn'>Toastmaster:</h4>
              Synne
              <a href="mailto:" target="_blank" rel="noreferrer">Mail kommer</a>
              <a href="tel:48069322" target="_blank" rel="noreferrer">Telefon</a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Kontaktinfo;