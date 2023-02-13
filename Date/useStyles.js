import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
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
  star: {
    position: "absolute",
    left: 102,
    top: 16,
  },
  formHelperText: {
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
  },
}))

export default useStyles
