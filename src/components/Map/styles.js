import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  typography: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
}));
