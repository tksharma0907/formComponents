import { Box, FormControl, FormHelperText, TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import { getError } from "../../../../utils/common"
import Calendar from "./Calendar"
import MaskedInput from "./MaskedInput"
import useStyles from "./useStyles"
import {
  changeToDateFormat,
  changeToMaskedFormat,
  dateToString,
  getMaxDate,
  isLower,
  MINIMUM_DATE,
  validateDate
} from "./utils"

const DatePicker = ({
  name,
  control,
  label,
  fullWidth = true,
  rules,
  minDate = new Date(MINIMUM_DATE),
  minAge = 0, //change to max Date
  inputProps,
  variant = "outlined",
  className,
  onClick,
  ariaLabel,
  ...rest
}) => {
  const maxDate = getMaxDate(minAge)
  const classes = useStyles()

  return (
    <Controller
      render={({ field, formState: { errors } }) => {
        const error = getError(name, errors)
        return (
          <FormControl fullWidth={fullWidth} className={className}>
            <TextField
              id={`${name}`}
              variant={variant}
              label={label}
              className={classes.inputWrapper}
              value={changeToMaskedFormat(field.value)}
              onChange={(event) => {
                const val = changeToDateFormat(event.target.value)
                field.onChange(val)
              }}
              onBlur={(event) => {
                if (
                  validateDate(event.target.value) &&
                  !isLower(event.target.value, dateToString(maxDate))
                ) {
                  const val = dateToString(maxDate)
                  field.onChange(val)
                }
                field.onBlur()
              }}
              inputRef={field.ref}
              inputProps={{
                ...inputProps,
                itemRef: field.ref,
                minDate,
                maxDate,
                date: new Date(field.value),
                "aria-label": ariaLabel || `${name}`,
              }}
              InputProps={{
                id: `${name}`,
                inputComponent: MaskedInput,
                "aria-label": ariaLabel || `${name}`,
                endAdornment: (
                  <Calendar minDate={minDate} maxDate={maxDate} field={field} />
                ),
              }}
              error={!!error}
              {...rest}
            />
            <Box className={classes.star}>*</Box>
            {error && (
              <FormHelperText className={classes.formHelperText}>
                {error.message}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  )
}

export default DatePicker
