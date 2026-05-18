import { FormBoxText } from "ui-shared/components/ui/FormBoxText";
import { ButtonPrimary } from "ui-shared/components/ui/ButtonPrimary";
import { LinkTextLogin } from "ui-shared/components/ui/LinkTextLogin";
import { APP_ROUTES } from "../utils/Path";



export function Login() {

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login");
    }


    return (
        <div className="h-screen w-full flex flex-col bg-(--Page-background) justify-center items-center">
            <div className="w-fit h-fit flex flex-col p-4 gap-6 justify-center items-center rounded-md bg-(--Widget-background)">

                <h1 className="text-2xl text-(--Primary) font-primary font-bold">Black Amber Coffe</h1>

                <form onSubmit={handleLogin} className="w-fit h-fit flex flex-col gap-6 justify-center items-center bg-(--Widget-background)">
                    <FormBoxText title="E-mail" placeHolder="Enter your email" type="email" onChange={() => { }} />

                    <FormBoxText title="Password" placeHolder="Enter your password" type="password" onChange={() => { }} />

                    <ButtonPrimary type="submit">Sign In</ButtonPrimary>

                </form>

                <LinkTextLogin text1="Don't have an account?" text2="Sign Up" path={APP_ROUTES.SIGNUP} />
            </div>
        </div>
    )
}