import React, {useState} from 'react'

import style from './style.module.css';

export default function Navbar() {

  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow((prevShow) => !prevShow);
    console.log(show);
    console.log(style.navLinks);
  }

  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <h4>Logo</h4>
      </div>
      <nav className={style.nav}>
        <ul className={`${style.navLinks} ${show?style.open:''}`}>
          <li className={style.navLink}>Home</li>
          <li className={style.navLink}>About</li>
          <li className={style.navLink}>Contact</li>
        </ul>
        <div onClick={() => onClick()} className={style.hamburger} >
          <div className={`${style.line} ${show?style.open:''}`}></div>
          <div className={`${style.line} ${show?style.open:''}`}></div>
          <div className={`${style.line} ${show?style.open:''}`}></div>
        </div>
      </nav>
    </header>
  )
}
