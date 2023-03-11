import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Index = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ backgroundColor: "secondary.main" }}
      >
        MUI
      </Typography>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <React.Fragment key={index}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Index;
