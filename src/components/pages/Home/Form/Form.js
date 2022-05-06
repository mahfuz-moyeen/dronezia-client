import React from 'react';
import { toast } from 'react-toastify';
import './Form.css'
const Form = () => {
    const handleSendMessage = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        const formData = {
            name: name,
            phone: phone,
            email: email,
            message: message
        }
        toast.success('Send message')
        console.log(formData);
    }
    return (
        <div className='form-bg'>
            {/* <div>
                <img src={banner4} alt="" />
            </div> */}
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex flex-col lg:flex-row p-10 gap-5 items-center">
                    <div className="text-center lg:text-right">
                        <h1 className="text-3xl font-bold">REQUEST A QUICK QUOTE</h1>
                        <p className="py-6 font-semibold">We love to listen and we are eagerly waiting to talk to you regarding your project. Get in touch with us if you have any queries and we will get back to you as soon as possible.</p>
                    </div>
                    <div className="card rounded lg:rounded-md flex-shrink-0 w-full max-w-md shadow-2xl glass">
                        <div className="card-body">

                            <form onSubmit={handleSendMessage}>
                                <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name here" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="number" name='phone' placeholder="Your phone number" className="input input-bordered" required />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" name='message' placeholder="Your message" required></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn block mx-auto btn-primary">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;