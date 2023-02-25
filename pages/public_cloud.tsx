

    import Layout from "@/components/layout"


    export default function PubCloud() {
        return (
    
    <Layout>
    
    
    <>
    
    
      <section className="mb-10">
    
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundImage: 'url(/images/cloud-head.jpg)',
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

      <div className="container mx-auto">

        <div>
          <h1 className="text-5xl ">Key Components</h1>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="font-black">Compute Services</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>

            <div>
              <h3 className="font-black">Software Defined Storage</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Software Defined Networking</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Dashboard and Self Services</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Billing and Usage Metering</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Identity Services</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Undercloud</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>


            <div>
              <h3 className="font-black">Backup and Disaster Recovery</h3>
              Compute services which provide Virtual Machine services to the end users. Its built on Nova.

            </div>

          </div>
        </div>

      </div>
    
    
    </>
    
    
      </Layout>
    
    
    
        )}
    
    