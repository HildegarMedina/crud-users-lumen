import './Header.css';
import Logo from "../../molecules/logo/Logo.";
import Navbar from "../../molecules/navbar/Navbar";

function Header() {

  const navbarActions = [
    "Create",
    "Read",
    "Update",
    "Delete"
  ]

  return (
      <>
        <header className="header-main">
          <div className="container">
            <div className="col-6">
              <Logo/>
            </div>
            <div className="col-6">
              <Navbar items={navbarActions}/>
            </div>
          </div>
        </header>
      </>
  );
}

export default Header;

