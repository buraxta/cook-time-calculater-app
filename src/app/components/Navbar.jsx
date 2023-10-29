"use client";
import React, { useContext } from "react";
import Link from "next/link";
import DataContext from "../DataContext";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const NavbarComp = () => {
  const { setAddStep } = useContext(DataContext);
  return (
    <Box sx={{ flexGrow: 1 }} className="mt-2 ">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            className="cursor-pointer mx-[-20px]"
            variant="h6"
            component="div"
            onClick={() => setAddStep(false)}
          >
            Calculator App
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarComp;
