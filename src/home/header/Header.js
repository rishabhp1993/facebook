import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import MidMenu from "./midmenu/MidMenu";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { userdata } from "./../../resources/data/userdata";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    height: 40,
    borderRadius: "50px",
    backgroundColor: fade("#eff2f5", 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8b8c8e",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "10px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconbutton: {
    backgroundColor: "#e3e6ea",
    padding: "10px",
    marginRight: "5px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ minHeight: "0px" }}>
          <Grid item lg={3}>
            <Grid container alignItems="centre">
              <Grid item lg={2} sm={2} container>
                <svg
                  viewBox="0 0 36 36"
                  class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
                  fill="url(#jsc_s_h)"
                  height="40"
                  width="40"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.0782153%"
                      y2="0%"
                      id="jsc_s_h"
                    >
                      <stop offset="0%" stop-color="#0062E0"></stop>
                      <stop offset="100%" stop-color="#19AFFF"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                  <path
                    style={{ fill: "#fff" }}
                    d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  ></path>
                </svg>
              </Grid>
              <Grid item lg={8} sm={8} container>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6}>
            <div className={classes.grow}>
              <MidMenu></MidMenu>
            </div>
          </Grid>

          <Grid item lg={3}>
            <div className={classes.sectionDesktop}>
              <Avatar
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
                alt="img"
                src={require("./../../resources/profilepic/profilepic.jpg")}
              />
              <Typography style={{ marginRight: "16px", fontWeight: 500 }}>
                {userdata.name}
              </Typography>
              <IconButton
                className={classes.iconbutton}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <AddIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.iconbutton}
              >
                <Badge badgeContent={4} color="secondary">
                  <svg
                    viewBox="0 0 28 28"
                    alt=""
                    class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                    height="20"
                    width="20"
                  >
                    <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
                  </svg>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                className={classes.iconbutton}
              >
                <Badge badgeContent={4} color="secondary">
                  <svg
                    viewBox="0 0 28 28"
                    alt=""
                    class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                    height="20"
                    width="20"
                  >
                    <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                  </svg>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                className={classes.iconbutton}
                style={{ padding: "3px" }}
              >
                <ArrowDropDownIcon
                  fontSize="large"
                  className="arrow"
                ></ArrowDropDownIcon>
              </IconButton>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
