"use client";
import {
	Box,
	Button,
	Divider,
	Grid2,
	InputAdornment,
	TextField,
} from "@mui/material";
import { Header } from "../../components/Header";
import {
	AddOutlined,
	FileDownloadOutlined,
} from "@mui/icons-material";
import { SurveyTable } from "../../modules/survey_library/SurveyTable";
import { useSurveyData } from "../../modules/survey_library/useSurveyData";
import SearchIcon from "@mui/icons-material/Search";
import { columns } from "../../mockdata/SurveyTableUtil";

export type StatusKey = "success" | "disabled" | "pending" | "deleted";

export default function Home() {
	const { rows, loading, error } = useSurveyData();

	return (
		<>
			<Box mt="120px" ml="32px" mr="32px">
				<Grid2>
					<Header
						title="Survey Dashboard"
						description="All your survey activity displayed in one convenient place."
					/>
					<Button variant="outlined" sx={{ marginTop: "16px" }}>
						<FileDownloadOutlined /> EXPORT
					</Button>
					<Button
						variant="contained"
						sx={{ marginTop: "16px", marginLeft: "16px" }}
					>
						<AddOutlined /> NEW SURVEY
					</Button>
				</Grid2>
			</Box>
			<Divider variant="fullWidth" sx={{ marginTop: "16px" }} />
			<Box ml="32px" mr="32px">
				<Grid2 mt="24px" mb="24px">
					<TextField
						placeholder="Search through your surveys..."
						variant="outlined"
						sx={{ width: "550px" }}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid2>
				<Grid2 sx={{ borderRadius: "16px", maxWidth: "900px" }}>
					{rows && (
						<SurveyTable
							columns={columns}
							rows={rows}
							loading={loading}
							error={error}
						/>
					)}
				</Grid2>
			</Box>
		</>
	);
}
