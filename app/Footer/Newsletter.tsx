import React, { FormEvent, useState } from "react"

const Newsletter = () => {

    const [email, setEmail] = useState<string>("");
    const [isEmail, setIsEmail] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (email == "") {
            setIsEmail(false);
        } else {
            setIsEmail(true);
            alert("Thank you for subscribing!");
            setEmail("");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <h1 className='tw-text-2xl'>Newsletter</h1>
            <p className="tw-text-lg tw-text-gray-400 tw-mt-2">Don't miss a thing! Sign up to receive daily deals</p>
            <form className="tw-flex tw-flex-col tw-justify-center tw-mt-4 tw-text-[12px] md:tw-text-[16px]" onSubmit={handleSubmit}>
                <input aria-label="Your email address" type="email" className="tw-input tw-input-bordered tw-outline-none tw-text-gray-600"
                    value={email} placeholder="Your Email Address" onChange={handleChange}></input>
                <button type='submit' className="tw-btn tw-mt-4 tw-bg-gray-100 tw-rounded-md tw-text-gray-600">Subscribe</button>
            </form>
        </>
    )
}

export default Newsletter