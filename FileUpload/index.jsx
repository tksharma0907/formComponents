import { Box, FormHelperText, IconButton } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import React from "react"
import { Controller } from "react-hook-form"
import { ReactComponent as Alert } from "../../../../assets/alert-triangle.svg"
import { ReactComponent as Success } from "../../../../assets/check-circle.svg"
import { ReactComponent as Delete } from "../../../../assets/Iconsax_Bold_trash.svg"
import { formatBytes, getError } from "../../../../utils/common"
import useStyles from "./useStyles"

const FileUpload = ({
  name,
  control,
  accept,
  multiple = true,
  label = "Upload Documents",
  uploadDesc,
  maxSizeLimit = 10000,
  rules,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <Controller
        render={({ field, formState: { errors } }) => {
          const error = getError(name, errors)

          return (
            <>
              <input
                name={name}
                className={classes.input}
                id={name}
                accept={accept}
                type="file"
                multiple={multiple}
                onChange={(e) => {
                  const arr = Object.values(e.target.files)
                  const newArr = [...field.value, ...arr]
                  e.target.value = ""
                  field.onChange(newArr)
                }}
                {...rest}
              />
              <label className={classes.masterLabel}>Upload Document</label>
              <label htmlFor={name} style={{ width: "fit-content" }}>
                <Box className={classes.btnWrapper}>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    component="span"
                    startIcon={<AddIcon className={classes.icon} />}
                  >
                    {label}
                  </Button>
                  {!!error && (
                    <FormHelperText className={classes.formHelperText}>
                      <Alert />
                      {error.message}
                    </FormHelperText>
                  )}
                </Box>
              </label>
              <label className={classes.label}>{uploadDesc}</label>
              <Box className={classes.uploadedWrapper}>
                {field.value.map((val, index) => {
                  return (
                    <Box className={classes.uploadedCard}>
                      <Success className={classes.success} alt="success" />
                      <Box className={classes.fileName}>
                        <Box>{val.name}</Box>
                        <Box>{formatBytes(val.size)}</Box>
                      </Box>
                      <IconButton aria-label="Document Deleted">
                        <Delete
                          className={classes.deleted}
                          onClick={() => {
                            const value = field.value.filter(
                              (_, idx) => index !== idx
                            )
                            field.onChange(value)
                          }}
                        />
                      </IconButton>
                    </Box>
                  )
                })}
              </Box>
            </>
          )
        }}
        name={name}
        control={control}
        rules={{
          ...rules,
          validate: {
            isExceedLimit: (val) => {
              return (
                val.reduce((prev, curr) => prev + curr.size, 0) < 2e7 ||
                "File exceeds 20 mb."
              )
            },
          },
        }}
        {...rest}
      />
    </div>
  )
}
export default FileUpload
