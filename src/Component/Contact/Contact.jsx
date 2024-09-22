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
      {/* "Whetther you have a question, suggestion, or just want to say hello."
 */}
      <div className="contactDivs">
       <ContactCard icon="fa fa-map-marker"  title={t("contacts.address")} description={t("contacts.address_info")} />
       <ContactCard icon="fa fa-phone" title={t("contacts.phone")} description="(+963) 932531446" />
       <ContactCard icon="fa fa-envelope"  title={t("contacts.email")} description="s.sseba96@gmail.com" />
       <a target="_blank" href={myCV} download={myCV}><ContactCard icon="fa fa-folder-open"  title="CV" description={t("contacts.cv")} /></a>
      </div>
    </div>
  )
}
