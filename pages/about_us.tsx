import Layout from "@/components/layout"


export default function AboutUsPage() {
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
</>

</Layout>

    )}

