import './Section.css';

function Hvor(props) {
  return (
    <div className="section" ref={props.secref}>
        <img src="https://imaginary.abcmedia.no/resize?force=false&width=980&aspectratio=16:9&nocrop=false&interlace=true&url=https%3A%2F%2Fabcnyheter.drpublish.aptoma.no%2Fout%2Fimages%2Farticle%2F%2F2021%2F10%2F28%2F195797902%2F1%2Foriginal%2F52810633.jpg" alt="Flott bilde av Øyna her altså" className='section-image' />
        <figcaption>Øyna kulturlandskapshotell. Kilde: <a href="https://www.abcnyheter.no/reise/reisenyheter/2021/10/28/195797901/oyna-kulturlandskapshotell-et-av-de-15-beste-hotellene-i-europa">ABC nyheter</a></figcaption>
      <h2 className='section-title'>Hvor og når?</h2>
      <div className="section-text">
        <p>
            Bryllupet er søndag 23. juli 2023 i Levanger. Vi gifter oss i Alstadhaug kirke klokka 13:00, før veien går til Øyna kulturlandskapshotell. Der blir det servering og feiring. Bryllupet er alkoholfritt.
        </p>
        </div>
    </div>
  );
}

export default Hvor;