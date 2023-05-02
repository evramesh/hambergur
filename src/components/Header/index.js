import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="nav">
    <Link to="/">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <Link to="/" onClick={() => close()}>
                <AiFillHome />
                <li>Home</li>
              </Link>
              <Link to="/about" onClick={() => close()}>
                <BsInfoCircleFill />
                <li>About</li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
