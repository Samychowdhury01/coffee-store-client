import './Header.css'
import logo from '../../../assets/images/more/logo1.png'
const Header = () => {
    return (
        <div className="bg-image">
            <img src={logo} alt="header-logo" className='h-20' />
            <h2 className='text-white text-3xl md:text-6xl'>Espresso Emporium</h2>
        </div>
    );
};

export default Header;