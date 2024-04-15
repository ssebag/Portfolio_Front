import React, {useContext, useState} from 'react';
import './Navbar.css'
import { Items } from './Items'
import { HashLink } from "react-router-hash-link";
import {LangContext} from './../../i18n';

export default function NavItems({ navClass }) {
  const {t} = useContext(LangContext);

    const links = Items.map((el, idx) => {
        return (
          <li key={idx}>
          <HashLink smooth to={`/${el.path}`}>{t(`navbar.${el.title}`)}</HashLink>           
          </li>
        );
      });
  return (
    <>
       <ul className={navClass}>
          {links}
       </ul>
    </>
  )
}
