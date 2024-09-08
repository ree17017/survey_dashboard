import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Survey } from "./useGetSurvey";

interface TableProps {
	columns: GridColDef[];
	rows: Survey[];
	loading: boolean;
	error: Error | null;
}

export function SurveyTable({ columns, rows, loading, error }: TableProps) {
	return (
		<Box>
			<DataGrid
				sx={{
					borderRadius: "12px",
					"& .super-app-theme--header": {
						background: "lightGrey",
					},
					"& .MuiDataGrid-filler": {
						background: "lightGrey",
					},
				}}
				columns={columns}
				rows={rows}
				loading={loading}
				rowHeight={100}
			/>
		</Box>
	);
}
