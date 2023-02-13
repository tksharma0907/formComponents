import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
  },
  masterLabel: {
    marginTop: "10px",
    marginBottom: "30px",
    fontSize: "24px",
    fontWeight: 500,
  },
  label: {
    color: "#464645",
    fontSize: "16px",
    letterSpacing: " 0.16px",
    margin: "10px 0",
  },
  success: {
    flexBasis: "8%",
  },
  uploadedWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  uploadedCard: {
    display: "flex",
    boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.25)",
    minHeight: "47px",
    alignItems: "center",
    padding: "15px",
  },
  fileName: {
    flexBasis: "87%",
    display: "flex",
    flexDirection: "column",
  },
  formHelperText: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: "#ac0d1f",
    fontSize: "16px",
    "@media (max-width: 1350px)": {
      fontSize: "12px",
    },
  },
  btnWrapper: {
    display: "flex",
    gap: "30px",
  },
  btn: {
    backgroundColor: "#ffffff",
    border: "solid 1px ",
    borderColor: "#1b547d",
    borderRadius: "5px",
    boxShadow: "none",
    minWidth: "200px",
    "& .MuiButton-label": {
      fontSize: "16px",
      fontWeight: 600,
      color: "#1b547d",
      "@media (max-width: 950px)": {
        fontSize: "12px",
      },
    },
  },
  icon: {
    color: "#1b547d",
  },
  input: {
    display: "none",
  },
  deleted: {
    cursor: "pointer",
  },
}))

export default useStyles
