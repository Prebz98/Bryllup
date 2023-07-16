import './Section.css';
import './Dagen.css';
import kirke from '../images/kirke.jpg';

function Dagen(props) {
    return (
        <div className="section" ref={props.secref}>
            <img src={kirke} alt="dagen" className="section-image" />
            <h2 className='section-title'>Program for dagen</h2>
            <div className="section-text">
                <ul className="plan">
                    <li>13:00 - Vielse i Alstadhaug kirke</li>
                    <li>15:30 - Velkomst på Øyna + liten matbit</li>
                    <li>17:00 - Tre retter og alkoholfri servering</li>
                    <li>21:00 - Kaffe og kake</li>
<li>Natta - Nattmat</li>
                </ul>
            </div>
        </div>
    );
}

export default Dagen;