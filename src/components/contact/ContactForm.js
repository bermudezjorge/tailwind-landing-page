import React from 'react'

import { Formik, useField, Form } from 'formik'
import * as yup from 'yup'

import distritos from './distritos'

import Button from '../global/Button'

const labelClasses = "text-white font-bold font-sans mt-2"
const errorClasses = "text-red-200"

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className={labelClasses} htmlFor={props.id || props.name}>{label}</label>
      <input className="border-2 border-white rounded-md px-5 bg-transparent text-white p-1 placeholder-white my-1" {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className={errorClasses}>{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomTextArea = ({ label, ...props }) => {
  const [field ,meta] = useField(props)
  return (
    <>
      <label className={labelClasses} htmlFor={props.id || props.name}>{label}</label>
      <textarea className="border-2 border-white rounded-md px-5 bg-transparent text-white placeholder-white my-1" {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className={errorClasses}>{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox')

  return (
    <>
      <label className={labelClasses}>
        <input className="mr-3" type="checkbox" {...field} {...props}/>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={errorClasses}>{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props, 'checkbox')

  return (
    <>
      <label className={labelClasses} htmlFor={props.id || props.name}>{label}</label>
      <select className="border-2 divide-white rounded-md p-1 px-5 bg-transparent text-white my-1" {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className={errorClasses}>{meta.error}</div>
      ) : null}
    </>
  )
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const services = ['Limpieza y Desinfección COVID del hogar y oficinas', 'Limpieza y Desinfección COVID de coches', 'Lavado de muebles', 'Lavado de alfombras', 'Lavado de colchones']

export default function Contact() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          services: '',
          phoneNumber: '',
          email: '',
          district: '',
          acceptedTerms: false,
        }}
        validationSchema={yup.object({
          name: yup.string()
            .min(0, 'Escriba el nombre')
            .max(30, 'Su nombre es muy largo')
            .required('Requerido'),
          services: yup.string()
          .oneOf(services, 'Servicio invalido')
          .required('Requerido'),
          message: yup.string()
          .min(20, 'Su mensaje es muy corto')
          .max(300, 'Su mensaje es muy largo')
          .required('Requerido'),
          phoneNumber: yup.string().matches(phoneRegExp, 'Numero invalido')
          .min(0, 'Numero muy corto')
          .max(15, 'Su numero es muy largo')
          .required('Requerido'),
          email: yup.string()
            .email('Email invalido.')
            .required('Requerido'),
          district: yup.string()
          .oneOf(distritos, 'Distrito invalido')
          .required('Requerido'),
          acceptedTerms:  yup.boolean()
            .required('Requerido')
            .oneOf([true], 'You must accept the terms')
        })}
        onSubmit={(values, { setSubmitting, resetForm}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null , 2))
            resetForm()
            setSubmitting(false)
          })
        }}
      >
        {props => (
          <Form className="w-full md:w-5/6 m-auto p-5 md:p-10 flex flex-col items-end md:items-center">
            <div className="w-full flex flex-col md:flex-row md:space-x-12">
              <div className="w-full md:w-1/2 inline-flex flex-col">
                  <CustomTextInput label="Name" name="name" type="text" placeholder="Ingrese nombre"/>
                  <CustomSelect label="Servicios" name="services">
                    <option>Seleccione Servicio</option>
                    <option value="Limpieza y Desinfección COVID del hogar y oficinas">Limpieza y Desinfección COVID del hogar y oficinas</option>
                    <option value="Limpieza y Desinfección COVID de coches">Limpieza y Desinfección COVID de coches</option>
                    <option value="Lavado de muebles">Lavado de muebles</option>
                    <option value="Lavado de alfombras">Lavado de alfombras</option>
                    <option value="Lavado de colchones">Lavado de colchones</option>
                  </CustomSelect>
                  <CustomTextArea label="Mensaje" name="message" placeholder="Mensaje"/>
              </div>
              <div className="w-full md:w-1/2 inline-flex flex-col">
                <CustomTextInput label="Celular" name="phoneNumber" type="string" placeholder="Ingrese Celular"/>
                <CustomTextInput label="Email" name="email" type="email" placeholder="Ingrese E-mail"/>
                <CustomSelect label="Distrito" name="district">
                  <option>Seleccione Distrito</option>
                  {distritos.map((distrito, i) => (
                    <option key={i} value={distrito}>{distrito}</option>
                  ))}
                </CustomSelect>
                <CustomCheckbox name="acceptedTerms">
                  Acepto los Términos y condiciones
                </CustomCheckbox>
              </div>
            </div>
            <Button>
              {props.isSubmitting ? 'Loading...' : 'Enviar'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}