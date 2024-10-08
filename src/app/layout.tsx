import type { Metadata } from "next";
import "./globals.css";
import SideNav from "../../components/sideNav";
import { Box } from "@mui/material";

export const metadata: Metadata = {
	title: "ClassRanked",
	description: "Survey Dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SideNav />
				<Box sx={{ margin: "64px 0 0 350px" }}>{children}</Box>
			</body>
		</html>
	);
}
