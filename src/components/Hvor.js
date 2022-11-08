import './Section.css';

function Hvor(props) {
  return (
    <div className="section" ref={props.secref}>
      <img src="https://imaginary.abcmedia.no/resize?force=false&width=980&aspectratio=16:9&nocrop=false&interlace=true&url=https%3A%2F%2Fabcnyheter.drpublish.aptoma.no%2Fout%2Fimages%2Farticle%2F%2F2021%2F10%2F28%2F195797902%2F1%2Foriginal%2F52810633.jpg" alt="Flott bilde av Øyna her altså" className='section-image' />
      <h2 className='section-title'>Hvor og når?</h2>
      <div className="section-text">
        <p>
            Bryllupet er søndag 23. juli 2023 i Levanger. Vi gifter oss i Alstahaug kirke klokka (noe), før veien går til Øyna kulturlandskapshotell. Der blir det middag og fest.  
        </p>
        </div>
    </div>
  );
}

export default Hvor;