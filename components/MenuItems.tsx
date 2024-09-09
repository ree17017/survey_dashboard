import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface MenuItem {
	text: string;
	icon?: JSX.Element;
}

interface MenuListProps {
	items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
	return (
		<List>
			{items.map(({ text, icon }) => (
				<ListItem key={text}>
					<ListItemButton>
						{icon && icon}
						<ListItemText sx={{ marginLeft: "8px" }} primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

export default MenuList;
