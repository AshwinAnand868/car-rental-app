import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center mt-[4rem] md:mt-[1rem]">
            <SignUp 
                appearance={{
                    elements: {
                        card: "gap-4 pt-8 px-8 pb-6",
                        logoImage: "h-10 mb-2",
                        headerSubtitle: "hidden"
                    }
                }} 
            />
        </div>
    )
}

export default SignUpPage;