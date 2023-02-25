import MegaNavBar from "./navbar"
import FooterBo from "./footer"
export default function Layout({ children }) {
  return (
    <>
      <MegaNavBar></MegaNavBar>
      <main>{children}</main>
      <FooterBo></FooterBo>
    </>
  )
}