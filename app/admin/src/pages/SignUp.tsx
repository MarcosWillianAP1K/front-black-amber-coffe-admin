import { FormBoxText } from "ui-shared/components/ui/FormBoxText";
import { ButtonPrimary } from "ui-shared/components/ui/ButtonPrimary";
import { LinkTextLogin } from "ui-shared/components/ui/LinkTextLogin";
import { APP_ROUTES } from "../utils/Path";



export function SignUp() {

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("SignUp");
    }


    return (
        <div className="h-screen w-full flex flex-col bg-(--Page-background) justify-center items-center">
            <div className="w-fit h-fit flex flex-col p-4 gap-6 justify-center items-center rounded-md bg-(--Widget-background)">

                <h1 className="text-2xl text-(--Primary) font-primary font-bold">Black Amber Coffe</h1>

                <form onSubmit={handleSignUp} className="w-fit h-fit flex flex-col gap-6 justify-center items-center bg-(--Widget-background)">
                    <FormBoxText title="Name" placeHolder="Enter your name" type="text" onChange={() => { }} />

                    <FormBoxText title="E-mail" placeHolder="Enter your email" type="email" onChange={() => { }} />

                    <FormBoxText title="Password" placeHolder="Enter your password" type="password" onChange={() => { }} />

                    <FormBoxText title="Confirm your password" placeHolder="Confirm your password" type="password" onChange={() => { }} />

                    <ButtonPrimary type="submit">Sign Up</ButtonPrimary>

                </form>

                <LinkTextLogin text1="Already have an account?" text2="Sign In" path={APP_ROUTES.LOGIN} />
            </div>
        </div>
    )
}