import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emaill from './assets/email.png';
// import location from './assets/location.png';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const username = form.name.trim();
        const user_email = form.email.trim();
        const user_message = form.message.trim();

        if (username === '' || user_email === '' || user_message === '') {
            setLoading(false);
            toast.error("Please fill all the fields.", {
                position: 'bottom-right',
            });
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xyzgeall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username,
                    email: user_email,
                    message: user_message,
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!", {
                    position: 'bottom-right',
                });
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message. Please try again later.", {
                    position: 'bottom-right',
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", {
                position: 'bottom-right',
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            {/* Contact Section */}
            <section id="contact" className="py-20 lg:py-40 px-5 lg:px-40 dark:bg-gray-50 bg-gray-800">
                <div className="text-center mb-10">
                    <p className="text-lg font-semibold dark:text-black text-gray-200">Get In Touch</p>
                    <h1 className="text-5xl font-bold my-4 dark:text-black text-gray-200">Contact Me</h1>
                </div>
                <div className="flex flex-col justify-center lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2 p-8 dark:bg-white bg-gray-900 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-black text-gray-200">Send a Message</h2>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input type="text" name='name' id='name' placeholder="Your Name" className="p-6 border dark:border-gray-300 border-gray-700 rounded-2xl dark:bg-white bg-gray-800 dark:text-black text-gray-200" value={form.name}
                                onChange={handleChange} />
                            <input type="email" id='email' name="email" placeholder="Your Email" className="p-6 border dark:border-gray-300 border-gray-700 rounded-2xl dark:bg-white bg-gray-800 dark:text-black text-gray-200" value={form.email}
                                onChange={handleChange} />
                            <textarea placeholder="Your Message" name="message" id='message' className="p-4 border dark:border-gray-300 border-gray-700 rounded-2xl dark:bg-white bg-gray-800 dark:text-black text-gray-200 h-36" value={form.message}
                                onChange={handleChange}></textarea>
                            <button type="submit" className="btn btn-primary dark:text-white text-black">{loading ? "Sending..." : "Send Message"}</button>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </div>
    );
}

export default Contact;
