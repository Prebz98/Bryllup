import './Section.css';

function Overnatting(props) {
    return (
        <div className="section" ref={props.secref}>
            {/* image */}
            <h2 className='section-title'>Overnatting</h2>
            <div className="section-text">
                <p>
                    Vi har holdt av alle rom på Øyna, men det er et begrenset antall. Dersom du ønsker å booke et rom, ta kontakt med en av oss før mars. Vi har også holdt av et annet hotell som ligger rett ved, et litt rimeligere alternativ. Ellers er det flere muligheter i Levanger. 
                </p>
            </div>
        </div> 
    );
}

export default Overnatting;