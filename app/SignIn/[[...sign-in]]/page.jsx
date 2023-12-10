import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center mt-[4rem]">
            <SignIn />
        </div>
    )
}

export default SignInPage;