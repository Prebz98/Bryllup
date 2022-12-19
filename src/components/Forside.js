import ring from '../images/ring.jpg';
import './Forside.css';

function Forside() {
    return (
        <div className="Forside">
            <img src={ring} alt="" className='Bilde'></img>
        </div>
    );
}

export default Forside;