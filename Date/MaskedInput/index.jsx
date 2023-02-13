import React, { forwardRef } from "react"
import { IMask, IMaskInput } from "react-imask"
import { validateDate } from "../utils"

const MaskedInput = forwardRef((props, ref) => {
  const { onChange, maskedFormat, maxDate, minDate, date, ...rest } = props

  return (
    <IMaskInput
      mask={Date}
      autoFocus
      lazy={false}
      ref={ref}
      onAccept={(value) => {
        if (validateDate(value)) {
          onChange({ target: { name: props.name, value } })
        }
      }}
      overwrite
      blocks={{
        MM: {
          mask: IMask.MaskedRange,
          placeholderChar: "M",
          from: 1,
          to: 12,
          maxLength: 2,
        },
        DD: {
          mask: IMask.MaskedRange,
          placeholderChar: "D",
          from: 1,
          to: 31,
          maxLength: 2,
        },
        YYYY: {
          mask: IMask.MaskedRange,
          placeholderChar: "Y",
          from: minDate.getFullYear(),
          to: maxDate.getFullYear(),
          maxLength: 4,
        },
        "#": {
          mask: IMask.MaskedRange,
          placeholderChar: "",
          from: 0,
          to: 1,
          maxLength: 0,
        },
      }}
      pattern="MM/DD/YYYY#"
      {...rest}
    />
  )
})

export default MaskedInput
