import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center mt-[1rem]">
            <SignIn 
                appearance={{
                    elements: {
                        card: "gap-4",
                        logoImage: "h-10 mb-2",
                        headerSubtitle: "hidden"
                    }
                }}
            />
        </div>
    )
}

export default SignInPage;