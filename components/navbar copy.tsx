
import Link from 'next/link'


export default function old_MegaNavBar() {
    return (
<>
<nav
  className="fixed relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div className="px-6">
    <button
      className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentX"
      aria-controls="navbarSupportedContentX"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
    </button>
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContentX"
      data-te-collapse-item>
          <Link className="font-bold text-black pr-6 text-lg" href="/">CompTech</Link>
      <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>


        <li className="static mr-4" data-te-nav-item-ref data-te-dropdown-ref>
          <Link
            className="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Services
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </Link>
          <div
            className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonX"
            data-te-dropdown-menu-ref>
            <div className="px-6 py-5 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <Link
                    href="/private_cloud"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Private Cloud </Link>
                  <Link
                    href="/public_cloud"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Public Cloud </Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Virtualization</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Data Center Networking</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >SD-WAN</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Disaster Recovery and Backup</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Network Security</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cybersecurity Solutions</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Managed Cybersecurity </Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Software Defined Storage</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Kubernetes Platform</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Application Security</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >IOT Platform</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cloud Migration</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Digital Transformation</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Digital Workspace</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Data Center Infrastrucutre </Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >SAP Integration</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Salesforce</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >AWS Outpost</Link>
                </div>
              </div>
            </div>
          </div>
        </li>


        <li className="static mr-4" data-te-nav-item-ref data-te-dropdown-ref>
          <Link
            className="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Industries
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </Link>
          <div
            className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonX"
            data-te-dropdown-menu-ref>
            <div className="px-6 py-5 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Telecom</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Banking</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Government</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Healthcare</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Manufacturing</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Transport</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Defense</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Insurance</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Logistics</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Construction</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Aerospace</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Hospitality</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Education</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Pharmaceuticals</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Electronics</Link>
                </div>
                <div>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Professional Services</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Utilities</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Oil & Gas</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Readymade Garments</Link>
                  <Link
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Textile</Link>
                </div>
              </div>
            </div>
          </div>
        </li>


        <li className="mr-4" data-te-nav-item-ref>
          <Link
            className="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Cloud</Link>
        </li>


        <li  className="mr-4"  data-te-nav-item-ref>
          <Link
            className="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="about_us"
            data-te-ripple-init
            data-te-ripple-color="light"
            >About Us</Link>
        </li>

        <li  className="mr-4" data-te-nav-item-ref>
          <Link
            className="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="contact_us"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Contact Us</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</>
)}