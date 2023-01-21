import './Section.css';
import './Dagen.css';
import frieri from '../images/frieri.jpg';

function Dagen(props) {
    return (
        <div className="section" ref={props.secref}>
            <img src={frieri} alt="dagen" className="section-image" />
            <h2 className='section-title'>Program for dagen</h2>
            <div className="section-text">
                <ul className="plan">
                    <li>13:00 - Vielse i Alstadhaug kirke</li>
                    <li>16:00 - Velkomst på Øyna + liten matbit</li>
                    <li>17:00 - Servering, tre retter og alkoholfritt</li>
                    <li>21:00 - Kaffe og kake</li>
                </ul>
            </div>
        </div>
    );
}

export default Dagen;