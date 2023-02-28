import { useFormik } from "formik";
import React from "react";
import { Button } from "./Button.styles";
import './styles.css'
import emailjs from "@emailjs/browser";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Insira um Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido';
    }else{}

    return errors;
};

const Newsletter = () => {
    const message = 'Obrigado por assinar Casa Verde'
    const formik = useFormik({
        initialValues: {
            email: '',
        }, validate,
        onSubmit: values => {
            const templatePrams = {
                message: message,
                ToEmail: formik.values.email
            }
            emailjs.send("service_aryvkwv","template_31v6d2a",templatePrams,"YPHGJeQ4tOVEGB8IS")
            .then((response) => {console.log(response.status,response.text)},
            (err) => {console.log(err)})
        },
    });



    return (
        <div className="assinaturaNewsletter">
            <div className="assinaturaNewsletter__container">
                <div className="assinaturaNewsletter__container__text">
                    <h1>
                        Sua casa com as<br />
                        <strong>melhores plantas</strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a
                        sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>
                </div>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="fieldGroup">
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="&#x2709; Insira seu Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <Button valid={!formik.errors.email} type="submit"> Assinar newsletter</Button>
                    </div>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </form>
            </div>
        </div>
    )
}
export default Newsletter