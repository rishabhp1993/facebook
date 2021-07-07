import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./Stories.css";
import AddIcon from "@material-ui/icons/Add";
import { userdata } from "./../../resources/data/userdata";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import config  from '../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    borderRadius: "5px",
    flexWrap: "nowrap",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  iconbutton: {
    backgroundColor: "#fff",
    padding: "12px",
    fontSize: "0.5rem",
    position: "absolute",
    zIndex: "1",
    right: "-13px",
    top: "75px",
  },
  storyavatar: {
    width: "35px",
    height: "35px",
    position: "absolute",
    zIndex: 2,
    border: "4px solid #1976f2",
    top: "10px",
    left: "10px",
  },
}));

function Stories() {
  const classes = useStyles();
  let avatar = config.data.avatar;
  return (
    <div
      style={{
        marginTop: "25px",
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
      <GridList
        cellHeight={"200"}
        spacing={8}
        className={classes.gridList}
        cols={5}
      >

        <GridListTile>
            <img src={require(`./../../resources/profilepic/${avatar}`)} alt="img" style={{ height: "70%" }} />
            <GridListTileBar
              className="colorblack"
              style={{
                padding: "15px 0",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
              title="Create a story"
              actionIcon={
                <span>
                  <AddIcon className="iconbg" />
                </span>
              }
            />
        </GridListTile>

        {userdata.stories.map((story, i) => (
          <GridListTile>
            <Avatar className={classes.storyavatar}>
              <img
                alt="dp"
                width="35px"
                style={{ borderRadius: "30px" }}
                src={require(`./../../resources/friends/${story.postedbyimagename}`)}
              />
            </Avatar>
            <img
              src={require(`./../../resources/stories/${story.imagename}`)}
              alt="img"
            />

            <GridListTileBar
              style={{ backgroundColor: "transparent", color: "#fff" }}
              title={story.postedby}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Stories;
