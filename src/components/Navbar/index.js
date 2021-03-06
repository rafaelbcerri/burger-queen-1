import React from 'react';
import './styles.css';

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="list-item">
          <h1 className="logo">Burger Queen</h1>
        </li>
        <li className={`list-item nav-text ${props.tablesActive}`}>
          <Link to="/mesas">Novo pedido</Link>
        </li>
        <li className={`list-item nav-text ${props.kitchenActive}`}>
          <Link to="/cozinha">Cozinha</Link>
        </li>
        <li className={`list-item nav-text ${props.readyActive}`}>
          <Link to="/prontos">Pedidos prontos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;