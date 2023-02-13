import { Box, TextField } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import MenuItem from "@material-ui/core/MenuItem"
import React, { useEffect } from "react"
import { Controller } from "react-hook-form"
import { getError } from "../../../../utils/common"
import useStyles from "./useStyles"

const Select = ({
  name,
  control,
  label,
  options,
  fullWidth = true,
  rules,
  variant = "outlined",
  className,
  ...rest
}) => {
  const classes = useStyles()
  useEffect(() => {
    document.getElementById(`input-${name}`).removeAttribute("role")
  }, [name])

  return (
    <Controller
      render={({ field, formState: { errors } }) => {
        const error = getError(name, errors)
        return (
          <FormControl fullWidth={fullWidth} className={classes.wrapper}>
            <TextField
              select
              id={`input-${name}`}
              label={`${label} ${rules?.required ? " *" : " (optional)"}`}
              variant={variant}
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              error={!!error}
              role="select"
              aria-label={label}
              inputProps={{
                "aria-label": `${field.value ?? label}`,
                "aria-hidden": true,
                role: "select",
              }}
              InputProps={{
                id: `input-${name}`,
                role: "select",
                "aria-label": field.value,
              }}
              SelectProps={{
                id: `input-${name}`,
                role: "select",

                MenuProps: {
                  PaperProps: {
                    className: classes.paper,
                  },
                  MenuListProps: {
                    className: classes.menu,
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                },
              }}
              {...rest}
            >
              {options.map(({ label: menuLabel, value }, index) => (
                <MenuItem
                  id={menuLabel}
                  value={value}
                  key={index}
                  className={classes.menuItem}
                  divider={index === options.length - 1 ? false : true}
                >
                  <Box className={classes.text}>{menuLabel}</Box>
                </MenuItem>
              ))}
            </TextField>
            {!!error && (
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

export default Select
