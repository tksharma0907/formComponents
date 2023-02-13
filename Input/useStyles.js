import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  primaryWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  wrapper: (styles) => ({
    "& .MuiTextField-root": {
      // height: "54px",
      "& .Mui-error": {
        color: "#ac0d1f",
      },
    },
    "& label.Mui-focused": {
      color: "#1b547d",
    },
    "& label.Mui-error": {
      color: "#ac0d1f",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#121b24",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1b547d",
      },
      "&.Mui-error fieldset": {
        borderColor: "#ac0d1f",
      },
    },
    ...styles.wrapper,
  }),
  topLabel: {
    marginBottom: "10px",
    fontWeight: 600,
    color: "#121b24",
  },
  masterLabel: {
    color: "#121b24",
    fontSize: "24px",
    lineHeight: "1.26",
  },
  formHelperText: {
    position: "absolute",
    top: "52px",
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
  },
  formInpHelperText: {
    position: "absolute",
    bottom: "-19px",
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
  },
  txtAreaFormHelperText: {
    position: "absolute",
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
    marginTop: "210px",
  },
  txtInpAreaFormHelperText: {
    position: "absolute",
    color: "#ac0d1f",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "1.67",
    marginTop: "161px",
  },
  amountWrapper: {
    fontSize: "22px",
    color: "#464645",
  },
  descriptionWrapper: {
    marginTop: "210px",
    textAlign: "right",
    position: "absolute",
    right: 0,
    fontSize: "16px",
    color: "#4c4c50",
  },
}))

export default useStyles
