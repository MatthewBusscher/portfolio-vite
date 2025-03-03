import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/4acdb860-8a8c-451f-bfbb-c70d8bf12926"
                method="post"
                className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea 
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    ></textarea>
                    <button
                    type="button"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black drop-shadow-md hover:stroke-white">
                    Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact;