import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./Auth.module.scss";
import { IAuthInput } from "./auth.interface";
import { useAuthRedirect } from "./useAuthRedirect";
import AuthFields from "@/components/shared/user/AuthFields";
import Button from "@/components/ui/form-elements/Button";
import Heading from "@/components/ui/heading/Heading";
import { useAuth } from "@/hooks/useAuth";
import Meta from "@/utils/meta/Meta";

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();

	const [type, setType] = useState<"login" | "register">("login");

	// React hook form
	const {
		register: registerInput,
		handleSubmit,
		reset,
		getValues,
		formState,
	} = useForm<IAuthInput>({
		mode: "onChange",
	});

	const login = (data: IAuthInput) => {
		console.table(data);
	};
	const register = (data: IAuthInput) => {};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === "login") {
			login(data);
		}

		if (type === "register") {
			register(data);
		}

		reset();
	};

	return (
		<>
			<Meta title="Auth" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired={true}
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType("login")}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType("register")}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Auth;
