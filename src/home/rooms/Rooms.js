import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { userdata } from "./../../resources/data/userdata";
import rooms from "./../../resources/commonimages/rooms.png";
import Grid from "@material-ui/core/Grid";
import "./Rooms.css";
import { IconButton, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "345",
    padding: "10px",
  },
  cardaction: { display: "flex" },
  actionbuttons: {
    flex: 1,
    width: "20px",
    color: "gray",
    textTransform: "default",
  },
  avatar: {
    backgroundColor: red[500],
  },
  roomicons: {
    flex: 1,
    padding: "5px",
  },
  iconbutton: {
    backgroundColor: "#fff",
    padding: "10px",
    fontSize: "0.5rem",
    position: "absolute",
    zIndex: "1",
    right: "20px",
    border: "1px solid gray",
    top: "45px",
  },
}));

export default function Rooms() {
  const classes = useStyles();
  return (
    <div
      style={{
        marginTop: "20px",
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        overflowY: "visible",
      }}
    >
      <div style={{ height: 0, right: 0 }}>
        <IconButton edge="end" color="inherit" className={classes.iconbutton}>
          <ArrowForwardIcon
            fontSize="medium"
            style={{ color: "gray" }}
          ></ArrowForwardIcon>
        </IconButton>
      </div>
      <Card className={classes.root}>
        <Grid container style={{ marginBottom: "10px" }}>
          <Grid item lg={1}>
            <img alt="dp" width="30px" src={rooms} />
          </Grid>
          <Grid item lg={9}>
            <Typography style={{ display: "inline" }}>Rooms</Typography>
            <span
              style={{ fontSize: "0.9rem", color: "gray", marginLeft: "5px" }}
            >
              Video chat with friends
            </span>
          </Grid>
          <Grid item lg={2}>
            <a href="asd" style={{ textDecoration: "none", color: "#2f75dd" }}>
              Create room
            </a>
          </Grid>
        </Grid>
        <div style={{ display: "flex" }}>
          {userdata.friends.map((x, i) => (
            <IconButton className={classes.roomicons}>
              <Avatar>
                <img
                  alt="dp"
                  width="36px"
                  src={require(`./../../resources/friends/friend${i}.jpg`)}
                />
              </Avatar>
            </IconButton>
          ))}
        </div>
      </Card>
    </div>
  );
}
