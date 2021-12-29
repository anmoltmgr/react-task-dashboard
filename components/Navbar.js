import {
  alpha,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Cancel,
  HelpOutlineOutlined,
  Notifications,
  Search,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "red",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <Toolbar className={classes.toolbar}>
      <div className={classes.search}>
        <Search />
        <InputBase placeholder="Search..." className={classes.input} />
        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
      </div>
      <div className={classes.icons}>
        <Search
          className={classes.searchButton}
          onClick={() => setOpen(true)}
        />
        <Badge color="secondary" className={classes.badge}>
          <HelpOutlineOutlined />
        </Badge>
        <Badge color="secondary" className={classes.badge}>
          <Notifications />
        </Badge>
        <Typography>rabi poudel</Typography>
        <Badge color="secondary" className={classes.badge}>
          <ExpandMoreOutlined />
        </Badge>
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
    </Toolbar>
  );
};

export default Navbar;
