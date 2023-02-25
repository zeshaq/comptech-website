import MegaNavBar from "./navbar"
import FooterBo from "./footer"
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <MegaNavBar></MegaNavBar>
      <main>{children}</main>
      <FooterBo></FooterBo>
    </>
  )
}