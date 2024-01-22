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
            <h1 className='text-[16px] md:text-[20px] mb-2 font-bold'>Newsletter</h1>
            <p className="text-[12px] md:text-[16px]">Don't miss a thing! Sign up to receive daily deals</p>
            <form className="flex flex-col justify-center w-[43%] md:w-[85%] min-w-[182px] mt-4 text-[12px] md:text-[16px]" onSubmit={handleSubmit}>
                <input aria-label="Your email address" type="email" className="input input-bordered outline-none text-gray-600"
                    value={email} placeholder="Your Email Address" onChange={handleChange}></input>
                <button type='submit' className="btn mt-4 bg-gray-100 rounded-md text-gray-600">Subscribe</button>
            </form>
        </>
    )
}

export default Newsletter