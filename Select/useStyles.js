import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    "& .MuiTextField-root": {
      height: "54px",
    },
    "& label.Mui-focused": {
      color: "#1b547d",
    },
    "& label.Mui-error": {
      color: "#ac0d1f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#121b24",
      },
      "&:hover fieldset": {
        borderColor: "#121b24",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1b547d",
      },
      "&.Mui-error fieldset": {
        borderColor: "#ac0d1f",
      },
    },
  },
  menuItem: {
    height: "56px",
    color: "black",
    p: "0 2px",
    borderBottom: "1px solid",
    borderColor: "#e8e9eb",
  },
  text: {
    color: "black",
    height: "17px",
    fontSize: "14px",
    margin: "auto 0",
  },
  formHelperText: {
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
  },
  paper: {
    padding: {
      xs: "0 12.8px",
      sm: "0 20px",
    },
    maxHeight: "300px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c7ced8",
      borderRadius: "20px",
    },
  },
  menu: {
    padding: "0",
  },
}))

export default useStyles
