import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  customHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1b547d",
    padding: "0 10px",
    "& .MuiOutlinedInput-root.Mui-focused": {
      borderColor: "#efefef",
    },
  },
  arrowIcon: {
    height: "15px",
    width: "15px",
    color: "white",
    "& .Mui-disabled": {
      color: "#1b547d",
    },
  },
  select: {
    outline: "none",
    padding: "0",
    height: { xs: "30px", sm: "40px" },
    color: "white",
    "& fieldset, svg": {
      display: "none",
    },
    "& .MuiSelect-select.MuiInputBase-input.MuiSelect-outlined": {
      padding: { xs: "8px 16px", sm: "12px 16px" },
    },
  },
  paper: {
    maxHeight: "190px",
    "& .MuiList-root": {
      padding: "5px 0px",
    },
  },
  menu: {
    "& .MuiMenuItem-root": {
      fontSize: { xs: ".8rem", sm: "1rem" },
      minHeight: "auto",
    },
  },
  calendarIconBtn: {
    mr: { xs: "-12px", sm: "0px" },
  },
  calendarWrapper: {
    "& .react-datepicker": {
      fontFamily: "inherit",
      borderColor: "#efefef",
      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
      },
      "& .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name ": {
        width: {
          xs: "1.6rem",
          sm: "1.7rem",
        },
      },
      "& .react-datepicker__day--outside-month": {
        color: "#23749e",
        opacity: 0.3,
      },
      "& .react-datepicker__day--disabled": {
        cursor: "not-allowed",
        color: "#23749e",
        opacity: 0.2,
      },
    },
    "& .react-datepicker__day-name": {
      color: "white",
    },
    "& .react-datepicker__header": {
      backgroundColor: "#1b547d",
      borderColor: "#efefef",
      color: "white",
    },
    "& .react-datepicker__current-month": {
      color: "#4c4c50",
      fontWeight: 700,
    },
    "& .react-datepicker__day-names": {
      color: "#4c4c50",
      fontWeight: 500,
    },
    "& .react-datepicker__day": {
      color: "#4c4c50",
      fontWeight: 500,
    },
    "& .react-datepicker__day--selected": {
      color: "white",
      backgroundColor: "#1b547d",
    },
    "& .react-datepicker__day--outside-month": {
      color: "#efefef",
    },
    "& .react-datepicker__day--keyboard-selected": {
      backgroundColor: "transparent",
    },
  },
}))

export default useStyles
