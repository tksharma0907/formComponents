import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio as MatRadio,
  RadioGroup as MatRadioGroup
} from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import Info from "../../../common/Info"
import useStyles from "./useStyles"

const Radio = ({
  name,
  masterLabel,
  control,
  disableRipple,
  options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ],
  rules,
  defaultValue = "",
  row = false,
  info,
  ...rest
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.mainWrapper}>
      <Controller
        render={({ field, formState: { errors } }) => (
          <FormControl className={classes.wrapper}>
            <Box className={classes.infoWrapper}>
              <FormLabel id={name} className={classes.masterLabel}>
                {masterLabel}
                <Box component="span" className={classes.info}>
                  {info && <Info {...rest} />}
                </Box>
              </FormLabel>
            </Box>
            <MatRadioGroup
              aria-labelledby={name}
              name="radio-button"
              row={row}
              value={field.value}
              onChange={field.onChange}
              {...rest}
            >
              {options.map(
                ({
                  label: radioLabel,
                  value,
                  divider = false,
                  boldLabel = false,
                }) => {
                  return (
                    <Box key={radioLabel}>
                      {divider && <Divider className={classes.divider} />}
                      <FormControlLabel
                        className={
                          boldLabel
                            ? classes.boldRadioLabel
                            : classes.radioLabel
                        }
                        value={value}
                        key={radioLabel}
                        control={<MatRadio errors={errors} {...rest} />}
                        label={radioLabel}
                      />
                    </Box>
                  )
                }
              )}
            </MatRadioGroup>
          </FormControl>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        {...rest}
      />
    </Box>
  )
}

export default Radio
