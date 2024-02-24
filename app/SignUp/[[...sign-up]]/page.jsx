import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-mt-[1rem]">
            <SignUp 
                appearance={{
                    elements: {
                        card: "tw-gap-4 tw-pt-8 tw-px-8 tw-pb-6",
                        logoImage: "tw-h-10 tw-mb-2",
                        headerSubtitle: "tw-hidden"
                    }
                }} 
            />
        </div>
    )
}

export default SignUpPage;