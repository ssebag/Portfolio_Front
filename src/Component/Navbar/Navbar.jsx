import React, {useState, useContext} from 'react';
import './Navbar.css'
import NavItems from './NavItems'
import menu_icon from './../../assets/images/icons/menu-icon.png'
import {DarkModeContext} from './../../context/DarkModeContext';
import {LangContext} from './../../i18n';
import moon from './../../assets/images/icons/moon.png'
import sun from './../../assets/images/icons/sun.svg'
import Ar from './../../assets/images/icons/Ar.jpg'
import En from './../../assets/images/icons/En.jpg'

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  // ===================== Handle Functions ================
  function handleToggleNav() {
    setToggleNav(!toggleNav);
  }
 //============================= Mode =======================
 const { ToggleChangeMode , theme} = useContext(DarkModeContext);
 const { handleChangeLanguage} = useContext(LangContext);
 //============================== Lang =======================
 const lang= localStorage.getItem("language");
 const { t } = useContext(LangContext);
  return (
    <>
      <nav className={lang ==="ar" ? 'arabic' : ''}>
         <div className="container flex-bw">
            <NavItems navClass={"nav-items pointer flex-al-c"}/>
           <div className="navOption flex-al-c">
           <div className='mode pointer' onClick={ToggleChangeMode}>
              {
                theme == 'dark' ? (
                  <img className='forWeb' src={sun} />
                ):(
                  <img className='forWeb' src={moon} />
                )
              }
            </div>
            <div className="lang" onClick={handleChangeLanguage}>
              {
                  lang == 'ar' ? (
                    <img className='forWeb pointer' src={En} />
                  ):(
                    <img className='forWeb pointer' src={Ar} />
                  )
               }
            </div> 
           </div>
            <img
             src={menu_icon} 
             className='menu_icon pointer'
             onClick={handleToggleNav}
             /> 
         </div>
         {toggleNav ? (
          <div className="nav-mobile flex-col">
              <p className="close-icon pointer"
                 onClick={handleToggleNav}>
                X
              </p>
              <div className="lang flex-al-c" onClick={handleChangeLanguage}>
                {
                    lang == 'ar' ? (
                      <img className='forMobile pointer' src={En} />
                    ):(
                      <img className='forMobile pointer' src={Ar} />
                    )
                }
              </div> 
            <NavItems navClass={"nav-mobile-items flex-al-c flex-col"} />
            <div className='forMobile flex-al-c  pointer' onClick={ToggleChangeMode}>
              {
                theme == 'dark' ? (
                  <>
                    <p className='mode_paragraph'>{t("light_mode")}</p>
                    <img src={sun} />
                  </>
                ):(
                  <>
                    <p className='mode_paragraph'>{t("dark_mode")}</p>
                    <img src={moon} />
                  </>  
                )
              }
            </div> 
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
