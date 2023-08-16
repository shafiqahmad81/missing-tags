import Swich from '../swich/Swich';
import Logo from '../logo/Logo';
import "./header.css";

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className="wrap">
          <Swich />
          <Logo />
        </div>
        <div className="wrap-resposive">
          <Logo />
          <Swich />
        </div>
    </div>
  )
}

export default Header