import { Box, FormControl, FormHelperText } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import React from "react"
import { Controller } from "react-hook-form"
import {
  fieldVal,
  getError,
  inputAmountOnchange,
  limitToTwo
} from "../../../../utils/common"
import useStyles from "./useStyles"

const Input = ({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  rules,
  defaultValue = "",
  variant = "outlined",
  className,
  rows,
  description = false,
  topLabel,
  styles,
  fieldValidation = "default",
  maskedChange = (e, cb) => cb(e),
  ...rest
}) => {
  const classes = useStyles(styles)

  const sanitizeNumericInput = (amount) => {
    amount -= 0
    amount = Math.round(amount * 100) / 100

    return amount === Math.floor(amount)
      ? amount + ".00"
      : amount * 10 === Math.floor(amount * 10)
      ? amount + "0"
      : amount
  }
  return (
    <Controller
      render={({ field, formState: { errors } }) => {
        const error = getError(name, errors)
        return (
          <Box className={classes.primaryWrapper}>
            {fieldValidation === "isAmount" && (
              <Box className={classes.amountWrapper}>$</Box>
            )}
            <FormControl fullWidth={fullWidth} className={classes.wrapper}>
              {topLabel && (
                <Box className={classes.topLabel} htmlFor={`input-${name}`}>
                  {`${topLabel} ${rules?.required ? " *" : "(optional)"}`}
                </Box>
              )}
              <TextField
                type={type}
                id={`input-${name}`}
                label={
                  label && `${label} ${rules?.required ? " *" : "(optional)"}`
                }
                variant={variant}
                value={fieldVal(fieldValidation, field)}
                onChange={(e) => {
                  fieldValidation === "isAmount"
                    ? field.onChange(limitToTwo(inputAmountOnchange(e)))
                    : maskedChange(e, field.onChange)
                }}
                inputRef={field.ref}
                onBlur={() => {
                  if (fieldValidation === "isAmount") {
                    field.onChange(sanitizeNumericInput(+field.value))
                  } else {
                    field.onChange(field.value)
                  }
                  field.onBlur()
                }}
                error={!!error}
                rows={rows}
                {...rest}
              />
              {description && (
                <Box className={classes.descriptionWrapper}>
                  {`${field.value.length}/1000`}
                </Box>
              )}
              {!!error &&
                (!topLabel ? (
                  <FormHelperText
                    className={
                      !!rows
                        ? classes.txtAreaFormHelperText
                        : classes.formHelperText
                    }
                  >
                    {error.message}
                  </FormHelperText>
                ) : (
                  <FormHelperText
                    className={
                      !!rows
                        ? classes.txtInpAreaFormHelperText
                        : classes.formInpHelperText
                    }
                  >
                    {error.message}
                  </FormHelperText>
                ))}
            </FormControl>
          </Box>
        )
      }}
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      {...rest}
    />
  )
}

export default Input
