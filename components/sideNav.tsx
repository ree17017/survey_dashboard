import {
	AppBar,
	Divider,
	Drawer,
	InputAdornment,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	TextField,
	Toolbar,
	Grid2,
	Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import {
	CheckCircleOutline,
	DashboardOutlined,
	InsertChartOutlined,
	LibraryBooksOutlined,
	Logout,
	Settings,
	Support,
} from "@mui/icons-material";

const drawerWidth = 350;
export type SideNav = {
	children: React.ReactNode;
};
export default function SideNav() {
	const menuList = [
		{ text: "Homepage", icon: <DashboardOutlined /> },
		{ text: "Course Analytics", icon: <InsertChartOutlined /> },
		{ text: "Survey Library", icon: <LibraryBooksOutlined /> },
		{ text: "My Tasks", icon: <CheckCircleOutline /> },
	];
	const generalList = [
		{ text: "Settings", icon: <Settings /> },
		{ text: "Support", icon: <Support /> },
		{ text: "Account", icon: <AccountCircleIcon /> },
		{ text: "Logout", icon: <Logout /> },
	];
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar
					sx={{
						background: "white",
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<AccountCircleIcon color="primary" />
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						paddingLeft: "16px",
						paddingTop: "16px",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<TextField
					placeholder="Search..."
					variant="outlined"
					sx={{ width: "300px" }}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
				<Typography ml="8px" mt="16px">
					Menu
				</Typography>
				<List>
					{menuList.map(({ text, icon }) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								{icon && icon}{" "}
								<ListItemText sx={{ marginLeft: "8px" }} primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<Typography ml="8px" mt="16px">
					General
				</Typography>
				<List>
					{generalList.map(({ text, icon }) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								{icon && icon}
								<ListItemText sx={{ marginLeft: "8px" }} primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
