import { FC } from "react";

import { MenuItem } from "../MenuItem";

import { LogoutButton } from "./LogOutButton";
import { getAdminHomeUrl } from "@/config/url.config";
import { useAuth } from "@/hooks/useAuth";

const AuthItems: FC = () => {
	const { user } = useAuth();

	return (
		<div>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: "MdSettings",
							link: "/profile",
							title: "Profile",
						}}
						key={12}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: "MdLogin", link: "/auth", title: "Login" }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: "MdOutlineLock",
						link: getAdminHomeUrl(),
						title: "Admin panel",
					}}
				/>
			)}
		</div>
	);
};

export default AuthItems;
