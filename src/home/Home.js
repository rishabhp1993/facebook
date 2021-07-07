import React from "react";
import Header from "./header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stories from "./stories/Stories";
import AddPost from "./addpost/AddPost";
import LeftSidebar from "./leftsidebar/LeftSidebar";
import RightSidebar from "./rightsidebar/RightSidebar";
import Rooms from "./rooms/Rooms";
import Feed from "./feed/Feed";
import FeedCDH from "./components/FeedCDH";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={12} md={12}>
            <Header />
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "#eff2f5" }}>
          <Grid item lg={3} md={3}>
            <LeftSidebar />
          </Grid>

          <Grid item lg={6} md={6} className="fullheight">
            <Stories />
            <AddPost />
            <Rooms />
            <FeedCDH />
            <Feed />
          </Grid>
          <Grid item lg={3} md={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
