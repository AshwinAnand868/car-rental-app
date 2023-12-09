import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center mt-[8rem]">
            <SignUp />
        </div>
    )
}

export default SignUpPage;