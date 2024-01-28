import { Person, Search, ShoppingBag } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Styles from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function Header() {
  const { products } = useContext(CartContext)

  return (
    <Styles.Container>
      <Styles.NavContainer className="nav-container">
        <span>OCURRENCE</span>
        <ul className="menu-container">
          <li className="menu-item">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="menu-item">
            <Link to="/">MENS</Link>
          </li>
          <li className="menu-item">
            <Link to="/">WOMENS</Link>
          </li>
          <li className="menu-item">
            <Link to="/">CONTACT</Link>
          </li>
        </ul>
        <ul className="icons-container">
          <li className="icon-item">
            <Search />
          </li>
          <li className="icon-item">
            <Link to="/cart">
              <ShoppingBag />
              {products.length !== 0 && products.length}
            </Link>
          </li>
          <li className="icon-item">
            <Link to="/profile">
              <Person />
            </Link>
          </li>
        </ul>
      </Styles.NavContainer>
      {/* <Styles.NavShortcuts className="shortcuts-container">
        <ul className="shortcuts-list-content">
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
        </ul>
      </Styles.NavShortcuts> */}
    </Styles.Container>
  )
}