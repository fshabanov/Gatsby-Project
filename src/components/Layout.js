import React from "react"
import Banner from "./Banner"
import Footer from "./Footer"
import { Location } from '@reach/router'

const Component = ({ children, location }) => {
  return (
    <div>
      <Banner type={location.pathname === "/" ? "banner" : "nav"} />
      <div style={{ minHeight: 'calc(100vh - 300px)' }}>

        {children}
      </div>
      <Footer />
    </div>
  )
}

function Layout({ children }) {
  return <Location>
    {locationProps => <Component {...locationProps} children={children} />}
  </Location>;

}

export default Layout
