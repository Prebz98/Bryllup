import "./Navbar.css";

const handleRefClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

const NavItem = (props) => {
    return (
        <button className="nav-item" onClick={()=>handleRefClick(props.refProp)}>
            {props.text}
        </button>
    );
}

function Navbar(props) {

  return (
    <div className="navbar">
        <NavItem text="Hvor/når" refProp={props.refHvor} />
        <NavItem text="Dagen" refProp={props.refDagen} />
        <NavItem text="Kontakt" refProp={props.refKontakt} />
        {/* <NavItem text="Gaveønsker" href="/gave" /> */}
        {/* <NavItem text="Kommer du?" href="/svar" /> */}
    </div>
  );
}

export default Navbar;