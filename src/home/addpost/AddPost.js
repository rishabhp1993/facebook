import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { userdata } from "./../../resources/data/userdata";
import profilepic from "./../../resources/profilepic/profilepic.jpg";
import video from "./../../resources/commonimages/video.png";
import photovideo from "./../../resources/commonimages/photovideo.png";
import feelingactivity from "./../../resources/commonimages/feelingactivity.png";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "./AddPost.css";

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
  search: {
    position: "relative",
    height: 40,
    borderRadius: "50px",
    backgroundColor: "#eff2f5",
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function AddPost() {
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
      <Card className={classes.root}>
        <Grid container style={{ marginBottom: "10px" }}>
          <Grid item lg={1}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img alt="dp" width="36px" src={profilepic} />
            </Avatar>
          </Grid>
          <Grid item lg={11}>
            <div className={classes.search}>
              <InputBase
                placeholder={`What's on your mind, ${userdata.name}`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
        </Grid>
        <Divider />
        <CardActions disableSpacing className={classes.cardaction}>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={<img alt="a" style={{ width: "25px" }} src={video} />}
          >
            <span className="btntxt">Live Video</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={
              <img alt="b" style={{ width: "25px" }} src={photovideo} />
            }
          >
            <span className="btntxt">Photo/Video</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={
              <img alt="c" style={{ width: "25px" }} src={feelingactivity} />
            }
          >
            <span className="btntxt">Feelings/Activity</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
