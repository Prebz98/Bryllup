import './Section.css';
import './onsker.css';

function Onsker(props) {
    return (
        <div className="section" ref={props.secref}>
            <h2 className='section-title'>Ønskeliste</h2>
            <div className="section-text">
                <ul className="onskeliste">
                    <li>- Penger til bryllupsreise</li>
                    <li>- Diverse til kjøkkenet, liste finnes <a href="https://www.kitchn.no/onskeliste/155715">her</a>. Husk å markere dersom du har kjøpt noe.</li>
                </ul>
            </div>
        </div>
    )
}

export default Onsker;