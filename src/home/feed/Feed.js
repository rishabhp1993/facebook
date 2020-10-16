import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { userdata } from "./../../resources/data/userdata";
import "./Feed.css";
import profilepic from "./../../resources/profilepic/profilepic.jpg";
import publicicon from "./../../resources/commonimages/publicicon.png";
import like from "./../../resources/commonimages/likeaction.png";
import comment from "./../../resources/commonimages/commentaction.png";
import share from "./../../resources/commonimages/shareaction.png";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
    padding: 0,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Rooms() {
  const classes = useStyles();
  return userdata.posts.map((post, i) => (
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
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <img
                alt="dp"
                width="40px"
                src={require(`./../../resources/feeds/${post.feedpostedbyimgname}`)}
              />
            </Avatar>
          }
          style={{ paddingTop: 0 }}
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title={<span style={{ fontSize: "16px" }}>{post.postedby}</span>}
          subheader={
            <div>
              <span>{post.time}</span>
              <img
                src={publicicon}
                alt="pub"
                style={{
                  width: "12px",
                  marginLeft: "10px",
                  color: "gray",
                }}
              />
            </div>
          }
        />
        <CardContent style={{ paddingTop: 0 }}>
          {post.postdescription}
        </CardContent>
        <CardMedia
          className={classes.media}
          image={require(`./../../resources/feeds/${post.feedimagename}`)}
          title="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" style={{ padding: 0 }}>
            {post.reactions.map((reaction, i) => (
              <img
                style={{
                  width: "20px",
                  border: "2px solid #fff",
                  position: "relative",
                  right: `${4 * i}px`,
                  zIndex: 10 - i,
                }}
                src={require(`./../../resources/commonimages/${reaction}.svg`)}
              />
            ))}
          </IconButton>
          <span style={{ color: "gray", flexGrow: 1 }}>{post.likes}</span>
          <span style={{ color: "gray" }}>{`${post.comments} comments`}</span>
          <span
            style={{ color: "gray", marginLeft: "10px" }}
          >{`${post.shares} share`}</span>
        </CardActions>
        <Divider />
        <CardActions disableSpacing className={classes.cardaction}>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={<img alt="a" style={{ width: "20px" }} src={like} />}
          >
            <span className="btntxt">Like</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={<img alt="b" style={{ width: "20px" }} src={comment} />}
          >
            <span className="btntxt">Comment</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={<img alt="c" style={{ width: "20px" }} src={share} />}
          >
            <span className="btntxt">Share</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  ));
}
