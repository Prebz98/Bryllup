import './Section.css';
import './Dagen.css';
import frieri from '../images/frieri.jpg';

function Dagen(props) {
    return (
        <div className="section" ref={props.secref}>
            <img src={frieri} alt="dagen" className="section-image" />
            <h2 className='section-title'>Dagen</h2>
            <div className="section-text">
                <ul className="plan">
                    <li>13:00 - Vielse i Alstadhaug kirke</li>
                    <li>14:00 - Reise til Øyna</li>
                    <li>14:30 - Mingle</li>
                    <li>17:30 - Servering</li>
                </ul>
            </div>
        </div>
    );
}

export default Dagen;