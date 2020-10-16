import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { userdata } from "./../../resources/data/userdata";
import Grid from "@material-ui/core/Grid";
import sponsored1 from "./../../resources/sponsoredimages/sponsored1.jpg";
import sponsored2 from "./../../resources/sponsoredimages/sponsored2.jpg";
import birthday from "./../../resources/commonimages/birthday.png";
import yourpages1 from "./../../resources/commonimages/yourpages1.png";
import createpromotion from "./../../resources/commonimages/createpromotion.png";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./RightSidebar.css";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const useStyles = makeStyles((theme) => ({
  small: {
    width: "36px",
    height: "36px",
  },
  expandicon: {
    width: "34px",
    height: "34px",
    backgroundColor: "#e4e6eb",
  },
  sectionheading: {
    fontSize: "18px",
    color: "#65676b",
    fontWeight: "700",
  },
  sponsoredimgcontainer: {
    marginRight: "10px",
  },
  sponsoredtext: {
    lineHeight: "1rem",
  },
}));

function LeftSidebar() {
  const classes = useStyles();
  return (
    <div className="fullheight" style={{ marginTop: "10px" }}>
      <List>
        <ListItem>
          <Typography className={classes.sectionheading}>Sponsored</Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar className={classes.sponsoredimgcontainer}>
            <img
              alt="sponsored1"
              width="126px"
              className="roundedborder"
              src={sponsored1}
            />
          </ListItemAvatar>
          <ListItemText
            className="sponsoredtext"
            primary={"Get home loan in three simple steps"}
            secondary={"netsparker.com"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar className={classes.sponsoredimgcontainer}>
            <img
              alt="sponsored2"
              width="126px"
              className="roundedborder"
              src={sponsored2}
            />
          </ListItemAvatar>
          <ListItemText
            className="sponsoredtext"
            primary={"Career Booster Offer"}
            secondary={"edureka.co"}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Grid container>
            <Grid item lg={11}>
              <Typography className={classes.sectionheading}>
                Your Pages
              </Typography>
            </Grid>
            <Grid item lg={1}>
              <MoreHorizIcon className={"largeicons"} />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.small}>
              <img alt="dp" width="36px" src={yourpages1} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Tesseract Design Labs"} />
        </ListItem>
        <ListItem>
          <ListItemAvatar style={{ padding: "5px" }}>
            <img
              alt="dp"
              width="20px"
              style={{ marginLeft: "20px" }}
              src={createpromotion}
            />
          </ListItemAvatar>
          <ListItemText secondary={"Create Promotion"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography className={classes.sectionheading}>Birthdays</Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="birthday" width="36px" src={birthday} />
          </ListItemAvatar>
          <ListItemText primary="Aman Raj's Birthday is today." />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Grid container>
            <Grid item lg={9}>
              <Typography className={classes.sectionheading}>
                Contacts
              </Typography>
            </Grid>
            <Grid item lg={1}>
              <VideoCallIcon className={"largeicon"} />
            </Grid>
            <Grid item lg={1}>
              <SearchIcon className={"largeicon"} />
            </Grid>
            <Grid item lg={1}>
              <MoreHorizIcon className={"largeicon"} />
            </Grid>
          </Grid>
        </ListItem>
        {userdata.friends.map((friend, i) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.small}>
                <img
                  alt="dp"
                  width="36px"
                  src={require(`./../../resources/friends/${friend.imagename}`)}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={friend.friendname} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default LeftSidebar;
