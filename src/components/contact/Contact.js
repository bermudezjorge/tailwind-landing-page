import React from 'react'

import Title from '../global/Title'
import ContactForm from './ContactForm'
import ContactFooter from './ContactFooter'

const ContactGrandient = {
  background: 'linear-gradient(0deg, rgba(121,10,205,1) 0%, rgba(150,36,150,1) 50%)'
}

export default function Contact() {
  return (
    <div id="contactenos" className="w-full p-5 md:p-12" style={ContactGrandient}>
      <Title classes="text-center" color="white" text="Ponte en CONTACTO" />
      <ContactForm />
      <ContactFooter />
    </div>
  )
}