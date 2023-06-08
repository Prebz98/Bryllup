import './Section.css';
import './onsker.css';
import frieri from '../images/frieri.jpg';

function Onsker(props) {
    return (
        <div className="section" ref={props.secref}>
            <img src={frieri} alt="dagen" className="section-image" />
            <h2 className='section-title'>Ønskeliste</h2>
            <div className="section-text">
                <ul className="onskeliste">
                    <li>- Penger til bryllupsreise</li>
                    <li>- Opplevelse</li>
                    <li>- Diverse til kjøkkenet, liste finnes <a href="https://www.kitchn.no/onskeliste/155715">her</a>. Husk å få markert dersom du har kjøpt noe. Dette kan noen anstatte gjøre dersom du kjøper i butikk.</li>
                </ul>
            </div>
        </div>
    )
}

export default Onsker;