

    import Layout from "@/components/layout"

    import Image from 'next/image'

    export default function PubCloud() {
        return (
    
    <Layout>
    
    
    <>
    
    
      <section className="mb-10">
    
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundImage: 'url(/images/pvtcld.jpg)',
            height: '500px'
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Public Cloud Infrastructure <br /><span>on OpenStack Zed</span>
                </h1>
                <button
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/>

<div className="container mx-auto text-3xl">

The Most Widely Deployed Open Source Cloud Software in the World
Deployed by thousands. Proven production at scale. OpenStack is a set of software components that provide common services for cloud infrastructure.

</div>

<br/>

<br/><br/><br/>

      <div className="container mx-auto">

        <div>
          <h1 className="text-5xl ">Key Components of a public cloud Infrastructure</h1>
          <br/>
          <hr/>
          <br/>
          <br/>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-2">
              <h3 className="font-black">Compute Services</h3>
              Manages and provisions virtual machines running on hypervisor nodes.


            </div>

            <div className="p-2">
              <h3 className="font-black">Block Storage</h3>
              Manages persistent block storage volumes for virtual machines.


            </div>


            <div className="p-2">
              <h3 className="font-black">Object Storage</h3>
              Allows users to store and retrieve files and arbitrary data.


            </div>


            <div  className="p-2">
              <h3 className="font-black">Software Defined Networking</h3>
              Provides connectivity between the interfaces of OpenStack services.


            </div>


            <div className="p-2">
              <h3 className="font-black">Dashboard and Self Services</h3>
              Web browser-based dashboard that you use to manage OpenStack services.



            </div>


            <div className="p-2">
              <h3 className="font-black">Billing and Usage Metering</h3>
              Provides measurements of cloud resources.


            </div>


            <div className="p-2">
              <h3 className="font-black">Identity Services</h3>
              Centralized service for authentication and authorization of OpenStack services and for managing users, projects, and roles.
            </div>


            <div className="p-2">
              <h3 className="font-black">Undercloud</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div className="p-2">
              <h3 className="font-black">Backup and Disaster Recovery</h3>
              Freezer is a distributed backup restore and disaster recovery as a service platform. It is designed to be multi OS (Linux, Windows, OSX, BSD), focused on providing efficiency and flexibility for block based backups, file based incremental backups, point-in-time actions, jobs synchronization (i.e. backup synchronization over multiple nodes) and many other features. It is aimed at being useful for all environments, including large ephemeral Clouds.
            </div>


            <div className="p-2">
              <h3 className="font-black">Container Services</h3>
              API service for running application containers without the need to manage servers or clusters. 
            </div>


            <div className="p-2">
              <h3 className="font-black">Image Services</h3>
              Registry service that you use to store resources such as virtual machine images and volume snapshots.



            </div>

            <div className="p-2">
              <h3 className="font-black">Orchestration</h3>
              Template-based orchestration engine that supports automatic creation of resource stacks.


            </div>

          </div>
        </div>

      </div>
    
    
<div className="container mx-auto">
<img src="/images/openstack-map.jpeg" width="100vw" height style={{width:"100%"}}/>
</div>
    </>
    
    
      </Layout>
    
    
    
        )}
    
    