import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
// As a basic setup, import your same slice reducers
import { setupStore } from "../redux/store"
import { taxRateSlab } from "../constant/form"

export const getError = (name, errors) => {
  if (!Object.keys(errors).length) return undefined
  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr) => (prev ? prev[curr] : prev), errors)
}

export const commaSeparatedAmount = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const fieldVal = (val, field) => {
  switch (val) {
    case "isAmount":
      return field.value
        .toString()
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*?)\..*/g, "$1")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    case "isPostal":
      return field.value
        .toUpperCase()
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{3})/g, "$1 ")
        .trim()
        .substring(0, 7)
    case "isPhoneNo":
      return field.value.replace(/[^0-9]/g, "")
    case "isThousand":
      return field.value.substring(0, 999)
    case "default":
      return field.value
    default:
      break
  }
}

export const limitToTwo = (value) =>
  value.indexOf(".") >= 0 ? value.substring(0, value.indexOf(".") + 3) : value

export const inputAmountOnchange = (e) => {
  let value = e.target.value
    .replace(/\,/g, "")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1")

  return value
}

export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const handelFee = (collectionType, province) => {
  const amount = collectionType === "Bankruptcy" ? 24.99 : 39.99
  const final =
    (amount * taxRateSlab[province].gst || 0) / 100 +
    (amount * taxRateSlab[province].pst || 0) / 100 +
    (amount * taxRateSlab[province].hst || 0) / 100 +
    (amount * taxRateSlab[province].qst || 0) / 100 +
    amount
  return final.toFixed(2)
}
