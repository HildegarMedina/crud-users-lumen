import Button from '../../atoms/button/Button';
import './Navbar.css';

interface NavbarProps {
  items: string[];
}

function Navbar(prop: NavbarProps) {

    const listItems = prop.items.map((value) =>
      <Button key={value} text={value}/>
    );

    return (
        <>
          <ul>
              {listItems}
          </ul>
        </>
    );
  }
  
  export default Navbar;
  
  