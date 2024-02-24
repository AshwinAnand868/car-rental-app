'use client'
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-mt-[4rem] md:tw-mt-[1rem]">
            <SignIn 
                appearance={{
                    elements: {
                        card: "tw-gap-4",
                        logoImage: "tw-h-10 tw-mb-2",
                        headerSubtitle: "tw-hidden"
                    }
                }}
            />
        </div>
    )
}

export default SignInPage;