import './Section.css';
import frieri from '../images/frieri.jpg';

function Dagen(props) {
    return (
        <div className="section" ref={props.secref}>
            <img src={frieri} alt="dagen" className="section-image" />
            <h2 className='section-title'>Dagen</h2>
            <div className="section-text">
                <p>
                    Her beskriver vi dagen littegran. Det blir nok en koselig dag tenker jeg.
                </p>
            </div>
        </div>
    );
}

export default Dagen;