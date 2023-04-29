import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet>
    </Outlet>
    </>
  )
}

export default Layout