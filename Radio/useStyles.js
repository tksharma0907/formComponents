import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  wrapper: {
    width: "100%",
    "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
      color: "#1b547d",
    },
    "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
      color: "#1b547d",
    },
    "& .MuiIconButton-colorSecondary:hover": {
      backgroundColor: "rgba(0,0,90,0.05)",
    },
    "& .MuiRadio-colorSecondary": {
      color: "rgba(0,0,90,0.2)",
    },
    "& .MuiFormGroup-row": {
      gap: "20px",
    },
  },
  masterLabel: {
    color: "#121b24",
    fontSize: "24px",
    lineHeight: "1.26",
    "&.MuiFormLabel-root.Mui-focused": {
      color: "#121b24",
    },
  },
  info: {
    position: "relative",
    top: "3px",
    marginLeft: "10px",
  },
  radioLabel: {
    color: "#464645",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1.38",
    marginBottom: "7px",
  },
  boldRadioLabel: {
    "& .MuiTypography-body1": {
      fontWeight: 600,
      lineHeight: "1.38",
    },
    marginBottom: "7px",
    color: "#464645",
    fontSize: "16px",
    lineHeight: "1.38",
  },
  divider: { margin: "30px 0" },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "33px",
  },
}))

export default useStyles
