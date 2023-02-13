import { Box } from "@material-ui/core"
import React, { useEffect, useState } from "react"

const id = "g-recaptcha-1"

const Captcha = ({ name, setValue, className }) => {
  const [scriptInitiated, setScriptInitiation] = useState(false)
  const [scriptDownloadSuccessful, setScriptDownloadSuccess] = useState(false)

  const grecaptcha = window.grecaptcha?.enterprise

  useEffect(() => {
    if (scriptDownloadSuccessful) {
      const node = document.getElementsByClassName("grecaptcha-badge")[0]
      if (node) node.style.visibility = "visible"

      grecaptcha.ready(function () {
        grecaptcha
          .execute(process.env.REACT_APP_GOOGLE_CAPTCHA_KEY, {
            action: () => {},
          })
          .then(function (token) {
            setValue(name, token)
          })
      })
    }
    return () => {
      const node = document.getElementsByClassName("grecaptcha-badge")[0]
      if (node) node.style.visibility = "hidden"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptDownloadSuccessful])

  useEffect(() => {
    if (!scriptInitiated) {
      setScriptInitiation(true)
      let script = document.createElement("script")
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.REACT_APP_GOOGLE_CAPTCHA_KEY}`
      script.defer = true
      script.async = true
      document.head.appendChild(script)
      script.onload = () => setScriptDownloadSuccess(true)
    }
  }, [scriptInitiated])

  return (
    <>
      <Box component="label" hidden htmlFor="g-recaptcha-response">
        Captcha
      </Box>
      <Box>
        <Box id={id} data-size="normal" className={className} />
      </Box>
    </>
  )
}

export default Captcha
