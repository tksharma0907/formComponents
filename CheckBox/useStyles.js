import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  formControlStyles: {
    alignItems: "baseline",
    justifyContent: "start",
    color: "#121b24",
    "& span": {
      // fontWeight: 600,
    },
  },
  controlStyles: {
  },
  unCheckedIconWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  unCheckedIcon: {
    height: "21px",
    width: "21px",
    borderColor: "#1b547d",
    border: "1px solid",
  },
  unCheckedIconLabel: {
    color: "black",
    fontSize: "6px",
  },
  checkedIconLabel: {
    color: "black",
    fontSize: "6px",
    marginTop: " -10px",
  },
}))

export default useStyles
