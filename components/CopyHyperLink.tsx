import { ContentCopyOutlined, CopyAll } from "@mui/icons-material";
import {
	Box,
	IconButton,
	InputAdornment,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { useState } from "react";

export function CopyHyperLink({ hyperlink }: { hyperlink: string }) {
	const [link] = useState(hyperlink);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(link);
		alert("Copied hyperlink to clipboard");
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			border="1"
			pt="18px"
			maxWidth="300px"
		>
			<TextField
				variant="outlined"
				aria-readonly
				fullWidth
				value={link}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start" onClick={copyToClipboard}>
							<ContentCopyOutlined sx={{ color: "#0F49D2" }} />
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
}
