import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // ADD THIS

export default function Contact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const formRef = useRef(null);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if(!values.name.trim()){
            newErrors.name = "Name cannot be empty";
        }

        if(!values.email.trim()){
            newErrors.email = "Invalid email";
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            newErrors.email = "Invalid email format";
        }

        if(!values.message.trim()){
            newErrors.message = "Message cannot be empty";
        }

        if (newErrors.name) {
            nameRef.current.focus();
        }
        else if (newErrors.email) {
            emailRef.current.focus();
        }
        else if (newErrors.message) {
            messageRef.current.focus();
        }

        setErrors(newErrors);

        // If no errors, send email
        if(Object.keys(newErrors).length === 0){
            setIsSubmitting(true);

            emailjs
                .sendForm(
                    'service_5p3zrch',
                    'template_e9ie70l',
                    formRef.current,
                    'Al3Lr4brd0MWnhN8g'
                )
                .then(
                    () => {
                        console.log('SUCCESS!');

                        // Success notification
                        Swal.fire({
                            toast: true,
                            position: "top-end",
                            icon: "success",
                            iconColor: 'transparent', // ADD THIS
                            title: "Message sent successfully!",
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            width: "auto",
                            padding: "0.75rem 1rem",
                            background: "#1e1e1e",
                            color: "#cccccc",
                            customClass: {
                                popup: 'custom-toast-popup-success',
                                title: 'custom-toast-title'
                            },
                            showClass: { popup: "animate__animated animate__fadeInRight" },
                            hideClass: { popup: "animate__animated animate__fadeOutRight" },
                            didOpen: (toast) => {
                                toast.style.marginTop = '80px'; // Adjust this value to move it down
                            }
                        });

                        setValues({ name: "", email: "", message: "" }); // Clear form
                        setIsSubmitting(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);

                        // Error notification
                        Swal.fire({
                            toast: true,
                            position: "top-end",
                            icon: "error",
                            iconColor: 'transparent', // ADD THIS
                            title: "Failed to send message.",
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            width: "auto",
                            padding: "0.75rem 1rem",
                            background: "#1e1e1e",
                            color: "#cccccc",
                            customClass: {
                                popup: 'custom-toast-popup-error',
                                title: 'custom-toast-title'
                            },
                            showClass: { popup: "animate__animated animate__fadeInRight" },
                            hideClass: { popup: "animate__animated animate__fadeOutRight" },
                            didOpen: (toast) => {
                                toast.style.marginTop = '80px'; // Adjust this value to move it down
                            }
                        });

                        setIsSubmitting(false);
                    }
                );
        }
    }

    return(
        <div>
            <div className="line-separator"></div>
            <div className="contactForm">
                <div className="left-contact">
                    <div className="thumbs-icon"><FontAwesomeIcon icon={faComment} size="2x" color="#23c483"/></div>
                    <h1>Hit me up!</h1>
                    <p>
                        Looking to collaborate or have a question?
                        Drop me a message here, and I'll get back to you promptly.
                        Let's create something awesome together.
                    </p>
                </div>
                <div className="right-contact">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label htmlFor="name"> Name</label>
                        <input type="text" id="name"
                               ref={nameRef}
                               name="name"
                               value={values.name}
                               onChange={handleChange}
                        />
                        <p className="error">
                            {errors.name && (
                                <>
                                    <FontAwesomeIcon icon={faCircleXmark} size="1x" color="#e30022"/> {errors.name}
                                </>
                            )}
                        </p>

                        <label htmlFor="email"> Email</label>
                        <input type="email" id="email"
                               ref={emailRef}
                               name="email"
                               value={values.email}
                               onChange={handleChange}
                        />
                        <p className="error">
                            {errors.email && (
                                <>
                                    <FontAwesomeIcon icon={faCircleXmark} size="1x" color="#e30022"/> {errors.email}
                                </>
                            )}
                        </p>

                        <label htmlFor="message">Message</label>
                        <textarea id="message"
                                  name="message"
                                  ref={messageRef}
                                  value={values.message}
                                  rows="5"
                                  onChange={handleChange}
                        ></textarea>
                        <p className="error">
                            {errors.message && (
                                <>
                                    <FontAwesomeIcon icon={faCircleXmark} size="1x" color="#e30022" /> {errors.message}
                                </>
                            )}
                        </p>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : "Let's connect"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}