import { Box, IconButton, MenuItem, Popover, Select } from "@material-ui/core"
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ReactComponent as Calender } from "../../../../../assets/calendar.svg"
import { dateToString, range } from "../utils"
import useStyles from "./useStyles"

const CustomSelect = ({ value, options, onChange, ...rest }) => {
  const classes = useStyles()
  return (
    <Select
      aria-labelledby="change year"
      className={classes.select}
      variant="outlined"
      value={value}
      onChange={onChange}
      MenuProps={{
        PaperProps: {
          className: classes.paper,
        },
        MenuListProps: {
          className: classes.menu,
        },
      }}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}

const Calendar = ({ maxDate, minDate, field }) => {
  const [calendarAnchor, setCalendarAnchor] = useState(null)
  const classes = useStyles()

  const years = range(minDate.getFullYear(), maxDate.getFullYear(), 1)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const handleClick = (event) => {
    setCalendarAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setCalendarAnchor(null)
  }

  const open = !!calendarAnchor
  const id = open ? "calendar-popover" : undefined

  return (
    <Box>
      <IconButton onClick={handleClick} className={classes.calendarIconBtn}>
        <Calender alt="calender" aria-label="calendar" />
      </IconButton>
      <Popover
        aria-label="calendar"
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={calendarAnchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className={classes.calendarWrapper}
      >
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <Box className={classes.customHeader}>
              <IconButton
                aria-label="calender-left-button"
                className={classes.arrowIcon}
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <ArrowLeftIcon />
              </IconButton>

              <CustomSelect
                onChange={({ target: { value } }) => changeYear(+value)}
                value={date.getFullYear()}
                options={years}
              />

              <CustomSelect
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                options={months}
              />

              <IconButton
                aria-label="calender-right-button"
                className={classes.arrowIcon}
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <ArrowRightIcon />
              </IconButton>
            </Box>
          )}
          selected={field.value ? new Date(`${field.value}T00:00:00`) : null}
          onChange={(date) => {
            field.onChange(dateToString(date))
            handleClose()
          }}
          inline
          maxDate={maxDate}
          minDate={minDate}
        />
      </Popover>
    </Box>
  )
}

export default Calendar
