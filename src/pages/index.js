import React, { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    // window.location.href = "/2020/"
  }, [])

  return <meta httpEquiv="refresh" content="0; url=/2020" />
}

export default IndexPage
