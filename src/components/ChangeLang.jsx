import React, { useState } from 'react'
import i18n from '../services/i18n';
import usFlag from "../assets/images/en-flag.svg";
import faFlag from "../assets/images/fa-flag.svg";

const ChangeLang = () => {
  const [lang ,setLang] = useState('en')

  const handleLang = (e) => {
    let language = e.target.value
    setLang(language)
    document.dir = language === 'fa' ? 'rtl' : 'ltr'
    changeLang()
  }
  const changeLang = () => i18n.changeLanguage(lang)
  return (
    <div>
      <img src={lang === 'fa' ? faFlag : usFlag} alt="" />
        <select name="" id="" onChange={handleLang}>
            <option value="en">EN</option>
            <option value="fa">FA</option>
        </select>
    </div>
  )
}

export default ChangeLang