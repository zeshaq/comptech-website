
import Link from 'next/link'


export default function MegaNavBar() {
    return (

<nav
  class="fixed relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div class="px-6">
    <button
      class="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentX"
      aria-controls="navbarSupportedContentX"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
    </button>
    <div
      class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContentX"
      data-te-collapse-item>
          <a class="font-bold text-black pr-6 text-lg" href="/">CompTech</a>
      <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>


        <li class="static mr-4" data-te-nav-item-ref data-te-dropdown-ref>
          <a
            class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Services
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <div
            class="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonX"
            data-te-dropdown-menu-ref>
            <div class="px-6 py-5 lg:px-8">
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <a
                    href="/privcloud"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Private Cloud Setup</a
                  >
                  <a
                    href="/public_cloud"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Public Cloud </a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Virtualization</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Data Center Networking</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >SD-WAN</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Disaster Recovery and Backup</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Network Security</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cybersecurity Solutions</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Managed Cybersecurity </a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Software Defined Storage</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Kubernetes Platform</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Application Security</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >IOT Platform</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cloud Migration</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Digital Transformation</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Digital Workspace</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Data Center Infrastrucutre </a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >SAP Integration</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Salesforce</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >AWS Outpost</a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>


        <li class="static mr-4" data-te-nav-item-ref data-te-dropdown-ref>
          <a
            class="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Industries
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <div
            class="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonX"
            data-te-dropdown-menu-ref>
            <div class="px-6 py-5 lg:px-8">
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Telecom</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Banking</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Government</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Healthcare</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Manufacturing</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Transport</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Defense</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Insurance</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Logistics</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Construction</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Aerospace</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Hospitality</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Education</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Pharmaceuticals</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Electronics</a
                  >
                </div>
                <div>
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Professional Services</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Utilities</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Oil & Gas</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Readymade Garments</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Textile</a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>


        <li class="mr-4" data-te-nav-item-ref>
          <a
            class="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Cloud</a
          >
        </li>


        <li  class="mr-4"  data-te-nav-item-ref>
          <a
            class="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >About Us</a
          >
        </li>

        <li  class="mr-4" data-te-nav-item-ref>
          <a
            class="block py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Contact Us</a
          >
        </li>

      </ul>
    </div>
  </div>
</nav>

)}