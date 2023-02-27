import Layout from "@/components/layout"


export default function Privcloud() {
    return (


<Layout>
<>
<section className="mb-10">
    
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: '50%',
        backgroundImage: 'url(/images/pvc.png)',
        height: '500px'
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12">
              Be in control with your own <br />
              <span class="text-8xl">
                Private Cloud
              </span>
            </h1>
          </div>
        </div>

      </div>
    </div>
  </section>


  <div className="container mx-auto text-3xl text-left pl-3 mb-20" >

Having a private cloud enables you to get all the benefits of cloud computing with your own control and security. 
Private clouds can be built on your on premise equipments, or on public cloud or a multi-cloud environment. 



        </div>

        <div class="container mx-auto">


<h1 className="text-3xl pl-3 font-black mb-2">We build our solutions on</h1>

          <div  class=" grid grid-cols-3">
                <div className="block_div">Vmware</div>
                <div className="block_div">Nutanix</div>
                <div className="block_div">Aws Outpost</div>
                <div className="block_div">Citrix</div>
                <div className="block_div">OpenStack</div>
                <div className="block_div">HPE Greenlake</div>
                <div className="block_div">Rancher</div>
                <div className="block_div">Azure Arc</div>
                <div className="block_div">Google Anthos</div>
          </div>
        </div>

        <div class="container mx-auto">


<h1 className="mt-6 text-3xl pl-3 font-black mb-2">Benefits of a private cloud</h1>



<div class="p-3 text-xl">
  Building a private cloud makes it possible for all enterprises—even those in highly regulated industries—to avail themselves of many of the benefits of cloud computing without sacrificing security, control and customization. Specific advantages of private cloud include the following:
</div>

<div class="p-3 text-xl">
Full control over hardware and software choices. Private cloud customers are free to purchase the hardware and software they prefer, vs. the hardware and software the cloud provider offers.
</div>

<div class="p-3 text-xl">
Freedom to customize hardware and software in any way. Private cloud customers can customize servers in any way they want and can customize software as needed with add-ons or through custom development.
</div>


<div class="p-3 text-xl">
Greater visibility into security and access control, because all workloads run behind the customers’ own firewall.
</div>

<div class="p-3 text-xl">
Fully enforced compliance with regulatory standards. Private cloud customers aren’t forced to rely on the industry and regulatory compliance offered by the cloud service provider.
The chief disadvantage of private cloud is the higher cost, which can include the cost of purchasing and installing new hardware and software and the cost of managing it (which may involve hiring additional IT staff.) Another disadvantage is somewhat limited flexibility—once an organization invests in hardware and software for its private cloud, adding capacity or new capabilities requires additional purchases. Virtual private cloud and managed cloud services (see below) can lessen these disadvantages to a degree.
</div>
        </div>
        
</>

</Layout>

    )}

