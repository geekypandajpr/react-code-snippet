import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  iconr: {
    float: "right",
    color: "#000",
  },
  logo: {
    float: "right",
  },
  title: {
    flexGrow: 1,
    color: "#000",
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  subIcon: {
    maxWidth: "13%",
    float: "left",
    marginRight: "15px",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    backgroundColor: "#000",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default useStyles;
