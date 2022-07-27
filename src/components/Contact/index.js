import React, {Component} from "react";
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

class Contact extends Component {
    state = {
        name: '',
        companyName: '',
        email: '',
        message: '',
        errStatus: false,
    }

    onChangeName = e => {
        this.setState({name: e.target.value})
    }

    onChangeCompanyName = e => {
        this.setState({companyName: e.target.value})
    }

    onChangeMessage = e => {
        this.setState({message: e.target.value})
    }

    onChangeEmail = e => {
        this.setState({email: e.target.value})
    }

     submitForm = (e) => {
        e.preventDefault()

        const {name, companyName, email, message} = this.state
        
        if (name !== '' && companyName !== '' && message !== '' && email !== '') {
            emailjs.sendForm('service_n2w8a5c', 'template_t4a4rtm', e.target, 'u8bVfJlgy9QJKeMhz')
            .then((result) => {
                toast.success("E-Mail successfully sent!", {position: toast.POSITION.BOTTOM_CENTER})
            })
            .catch((error) => {
                toast.error("Something went wrong..!!", {position: toast.POSITION.BOTTOM_CENTER})
            })
            this.setState({name: '', companyName: '', email: '', message: ''})
            e.target.reset();
        } else {
            this.setState({errStatus: true})
        }
    }

    render() {
        const {name, companyName, email, message, errStatus} = this.state
        
    return (
        <div className="contact d-flex flex-row justify-content-center">
            <form className="contact-form d-flex flex-column justify-content-center" onSubmit={this.submitForm}>
                <label className="contact-label" htmlFor="name">N<span className="contact-span">ame</span></label>
                <input className="contact-input" id="name" type="text" name="name" placeholder="Name" value={name} onChange={this.onChangeName} />
                <label className="contact-label">C<span className="contact-span">ompany</span> N<span className="contact-span">ame</span></label>
                <input className="contact-input" type="text" name="company_name" placeholder="Company Name" value={companyName} onChange={this.onChangeCompanyName} />
                <label className="contact-label">E<span className="contact-span">mail</span></label>
                <input className="contact-input" type="email" name="email" placeholder="Email" value={email} onChange={this.onChangeEmail} />
                <label className="contact-label">M<span className="contact-span">essage</span></label>
                <textarea className="contact-input" name="message" rows='4' placeholder="Please drop your message here ...!!!" value={message} onChange={this.onChangeMessage} />
                {errStatus && <p className="contact-error-msg">*Require All Fields To Be Filled</p>}
                <button className="button button1"><i className="bi bi-send"></i> E-Mail</button>
                <ToastContainer />
            </form>
        </div>
    )
    }
}

export default Contact;
