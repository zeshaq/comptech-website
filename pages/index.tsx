import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import MegaNavBar from '@/components/navbar'
import Caro from '@/components/carousel'
import HeroOne from '@/components/heroOne'
import AltNews from '@/components/AltNews'
import Intro from '@/components/intro'
import HomeAboutUs from '@/components/HomeAboutUs'
import Link from 'next/link'
import HomeCloudSection from '@/components/HomeCloudSection'
import Layout from '@/components/Layout'
import HomeK8Section from '@/components/Home_K8_Section'
import HomeSecuritySection from '@/components/HomeSecuritySection'
import FooterBo from '@/components/footer'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<Layout>
<div class="md:container md:mx-auto">



<Caro></Caro>
<HomeAboutUs></HomeAboutUs>
<HomeCloudSection></HomeCloudSection>

<HomeSecuritySection></HomeSecuritySection>
 


<HeroOne></HeroOne>


</div>
</Layout>
  )
}
