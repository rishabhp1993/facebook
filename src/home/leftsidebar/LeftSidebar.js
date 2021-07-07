import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import covid19 from "./../../resources/commonimages/covid19.png";
import pages from "./../../resources/commonimages/pages.png";
import friends from "./../../resources/commonimages/friends.png";
import messages from "./../../resources/commonimages/messenger.png";
import groups from "./../../resources/commonimages/groups.png";
import marketplace from "./../../resources/commonimages/marketplace.png";
import videos from "./../../resources/commonimages/videos.png";
import games from "./../../resources/commonimages/games.png";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./LeftSidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import config from '../../config';

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
}));

function LeftSidebar() {
  const classes = useStyles();
  let avatar = config.data.avatar;
  let name = config.data.name;
  let sitelogo = config.data.sitelogo;
  let sitecaption = config.data.sitecaption;
  return (
    <div className="fullheight" style={{ marginTop: "10px" }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.small}>
              <img alt="dp" width="36px" src={require(`./../../resources/profilepic/${avatar}`)} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={covid19} />
          </ListItemAvatar>
          <ListItemText primary="COVID-19 Information Centre" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={pages} />
          </ListItemAvatar>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={friends} />
          </ListItemAvatar>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={messages} />
          </ListItemAvatar>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={groups} />
          </ListItemAvatar>
          <ListItemText primary="Groups" secondary="2 new" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={marketplace} />
          </ListItemAvatar>
          <ListItemText primary="Marketplace" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="dp" width="36px" src={videos} />
          </ListItemAvatar>
          <ListItemText primary="Videos" secondary="9+ new videos" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.expandicon}>
              <ExpandMoreIcon style={{ color: "black" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="See more" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography className={classes.sectionheading}>
            Your shortcuts
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.small}>
              <img alt="uplus" width="36px" src={require(`./../../resources/commonimages/${sitelogo}`)} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={sitecaption} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img alt="games" width="36px" src={games} />
          </ListItemAvatar>
          <ListItemText primary="Games" />
        </ListItem>
      </List>
      <List style={{ marginTop: "auto" }}>
        <ListItem>
          <Typography variant="caption" style={{ color: "#65676b" }}>
            Privacy · Terms · Advertising · Ad choices <br />
            Cookies . More . Facebook © 2021
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}

export default LeftSidebar;
