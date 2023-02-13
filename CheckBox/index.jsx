import { Box, Checkbox, FormControlLabel } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import { ReactComponent as Checked } from "../../../../assets/CheckedBox.svg"
import useStyles from "./useStyles"

const CheckBox = ({ name, optional, control, label, rules, ...rest }) => {
  const classes = useStyles()

  return (
    <Controller
      render={({ field }) => (
        <FormControlLabel
          className={classes.formControlStyles}
          control={
            <div className={classes.controlStyles}>
              <Checkbox
                defaultChecked={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                checked={field.value}
                icon={
                  <Box
                    style={{ marginTop: "15px" }}
                    className={classes.unCheckedIconWrapper}
                  >
                    <Box
                      style={{
                        marginTop: !rules ? "0px" : "-10px",
                      }}
                      className={classes.unCheckedIcon}
                    />
                    <Box className={classes.unCheckedIconLabel}>
                      {/* {!rules && <>optional</>} */}
                    </Box>
                  </Box>
                }
                checkedIcon={
                  <Box className={classes.unCheckedIconWrapper}>
                    <Box
                      style={{
                        marginTop: !rules ? "10px" : "0px",
                      }}
                    >
                      <Checked />
                    </Box>
                    <Box className={classes.checkedIconLabel}>
                      {/* {!rules && <>optional</>} */}
                    </Box>
                  </Box>
                }
                {...rest}
              />
            </div>
          }
          label={label}
        />
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  )
}

export default CheckBox
