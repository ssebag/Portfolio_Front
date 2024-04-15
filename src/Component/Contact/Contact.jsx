import React , {useContext} from 'react'
import './Contact.css'
import Title from './../Title/Title'
import ContactCard from './../ContactCard/ContactCard'
import myCV from './../../assets/Seba_Ghneem_Front_CV.pdf'
import {LangContext} from './../../i18n';

export default function Contact() {
  const { t } = useContext(LangContext);
  
  return (
    <div className="contact" id="contact">
      <Title title={t("navbar.Contacts")} description={t("contacts.description")} />
      <div className="contactDivs">
       <ContactCard icon="L"  title={t("contacts.address")} description={t("contacts.address_info")} />
       <ContactCard icon="Ph" title={t("contacts.phone")} description="00963932531446" />
       <ContactCard icon="G"  title={t("contacts.email")} description="s.sseba96@gmail.com" />
       <a target="_blank" href={myCV} download={myCV}><ContactCard icon="CV"  title="CV" description={t("contacts.cv")} /></a>
      </div>
    </div>
  )
}
