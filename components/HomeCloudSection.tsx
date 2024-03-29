
import Link from 'next/link'

export default function HomeCloudSection() {
    return (

  <div className="full-width pb-3 m-0" style={{backgroundColor:'#eaeaea'}}>    
<div className="container mx-auto pt-3 pb-3" >



<div className="container my-24 px-6 mx-auto">
      
      <section className="mb-12 text-gray-800 text-center">
  
        <div className="flex justify-center">
          <div className="max-w-[800px]">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Are you ready <br />
              <span className="text-blue-600 text-5xl">to begin your Cloud Journey?</span>
            </h2>
            <p className="text-gray-500 text-lg">
                Explore our full range of solutions for building a private or public cloud Infrastrucutre.

            </p>
          </div>
        </div>
  
      </section>
      
    </div>



      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">

<div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <Link href="#!">
      <img
        className="rounded-t-lg"
        src="/images/cloud.jpg"
        alt="" />
    </Link>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Public Cloud Build Solutions
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        OpenStack based public cloud Infrastrucutre, with multi availability zones, cascading and edge provisioning.
      </p>
      <Link href="/public_cloud">
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Explore Now
      </button>
      </Link>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <Link href="#!">
      <img
        className="rounded-t-lg"
        src="/images/cs.png"
        alt="" />
    </Link>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Enterprise Private Cloud 
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
       Reduce your IT cost by adopting a private cloud Infrastrucutre to ensure maximum resource utilization, security, multi-tenancy. 
      </p>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Find Out More
      </button>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
    <Link href="#!">
      <img
        className="rounded-t-lg"
        src="/images/iot.png"
        alt="" />
    </Link>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Hybrid and Multi-Cloud 
        </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Incorporate workload portability, orchestration, and management across two or more computing environments.
      </p>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Explore
      </button>
    </div>
  </div>
</div>


        </div>

        </div>
       
        <br/>       <br/>
        </div>
    )}