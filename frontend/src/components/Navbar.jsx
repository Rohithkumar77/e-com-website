import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode, Button } from '@chakra-ui/react';
import { useEffect } from 'react';


const Navbar = () => {

	const {colorMode, toggleColorMode} = useColorMode();

	useEffect(() => {
		if (colorMode === 'dark') {
		  document.body.classList.add('dark-mode');
		} else {
		  document.body.classList.remove('dark-mode');
		}
	  }, [colorMode]);


	

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          Product Store 🛒
        </Link>
		</div>
        <Link to={"/create"}>
			<Button className='button'>
					Create Product
			</Button>
		</Link>
        <Button onClick={toggleColorMode} className='button'>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
		</Button>
        
    </nav>
  );
};

export default Navbar;
