import Layout from "@/components/layout"
import Image from 'next/image'


export default function AboutUs() {
    return (


<Layout>
<>
<section className="mb-10">
    
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: '50%',
        backgroundImage: 'url(/abs1.jpeg)',
        height: '500px'
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            About Us <br /><span></span>
            </h1>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container mx-auto text-center text-2xl">
  Established in 1989, CompTech are a managed services and telecommunications provider offering award-winning, 
  proven and uncomplicated technical solutions for over 200 organisations across the world with a mission of ‘Uniting technology, inspiring people’.


  </div>
<br/>

<div  style={{padding:"26px", backgroundColor:"#eaeaea"}}>
<div className="container mx-auto">

<div className="grid grid-cols-2 ">
  <div>
  <Image
      
      src="/images/cs.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  </div>
  <div>
  In a world where there is simply too much technology to choose from, our mission is to use our expertise and strategic partnerships to 
  ensure customers get the right solution to their individual requirements from a dedicated partner.

 

With over 100 engineers and consultants we have the depth and breadth of expertise to deliver 
expert managed services and telecommunications provision, yet we are small enough to care for each and every customer.

 

We specialise in converging IT, communications and connectivity to offer you comprehensive, 
uncomplicated solutions, proactively supported, that enable your organisation to operate without technical headaches.

  </div>
</div>
</div>
</div>



<br/>
<br/>
<div  style={{padding:"26px"}}>
<div className="container mx-auto text-center">
  <h1 className="text-3xl">Our Clients</h1>
<br/>
<br/>
<div className="grid grid-cols-4 text-center ">
  <div className="content-center">
    <Image className="mx-auto" src="/images/Clients/bgb.png" width={100} height={100} />
    Border Guard Bangladesh (BGB)</div>

  <div>
  <Image className="mx-auto" src="/images/Clients/bbs.png" width={100} height={100}/>
    Bangladesh Bureau of Statistics (BBS)</div>
  <div>
  <Image className="mx-auto" src="/images/Clients/bb.png" width={100} height={100}/>
    Bangladesh Bank</div>
  <div>
  <Image className="mx-auto" src="/images/Clients/jbl.png" width={100} height={100}/>
    Janata Bank</div>

  <div>
  <Image className="mx-auto" src="/images/Clients/modhumoti.png" width={100} height={100}/>    
    Modhumoti Bank Limited</div>

  <div>
  <Image className="mx-auto" src="/images/Clients/ibbl.png" width={100} height={100}/>
    Islami Bank Bangladesh Ltd</div>



    <div>
  <Image className="mx-auto" src="/images/Clients/ab.png" width={100} height={100}/>
    AB Bank  Ltd</div>

  <div>
  <Image className="mx-auto" src="/images/Clients/bnm.png" width={100} height={100}/>
    Bangladesh National Museum</div>


  <div>
  <Image className="mx-auto" src="/images/Clients/birdem.png" width={100} height={100}/>
    Birdem General Hospital</div>



    <div>
  <Image className="mx-auto" src="/images/Clients/agakhan.jpeg" width={100} height={100}/>
    Agakhan School</div>


  <div>
  <Image className="mx-auto" src="/images/Clients/brri.png" width={100} height={100}/>
    Bangladesh River Research Institute</div>



  <div>
  <Image className="mx-auto" src="/images/Clients/undp.png" width={100} height={100}/>
    UNDP</div>



  <div>
  <Image className="mx-auto" src="/images/Clients/premier.png" width={100} height={100}/>
    Premier Bank</div>

  <div>
  <Image className="mx-auto" src="/images/Clients/ibbl.png" width={100} height={100}/>
    Islami Bank Bangladesh Ltd</div>




</div>



</div>
</div>


<br/>
<br/>
</>

</Layout>

    )}

