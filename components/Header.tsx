import { Grid2, Typography } from "@mui/material";

export function Header({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<Grid2>
			<Typography variant="h5">{title}</Typography>
			<Typography variant="body2">{description}</Typography>
		</Grid2>
	);
}
