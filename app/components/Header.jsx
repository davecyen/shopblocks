import { useState} from "react"
import { Dialog } from "@headlessui/react"
import { Link } from "@remix-run/react"
import { Search } from "~/components/Search"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { FigmaIcon, GitHubIcon } from "~/components/Icons"
import { Logo } from "~/components/Logo"
import { ThemeSelector } from "~/components/ThemeSelector"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="px-6 py-6 backdrop-blur-sm z-50">
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Shop Blocks</span>
            <Logo className="h-5 fill-slate-700 dark:fill-slate-100" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <Search />
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center">
        <Link className="text-sm mr-4 font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300" to="/docs/installation">Components</Link>
        <Link to="https://figma.com" className="group mr-4" aria-label="Figma">
          <FigmaIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-800 dark:group-hover:fill-slate-300" />
        </Link>
        <Link to="https://github.com" className="group mr-4" aria-label="GitHub">
          <GitHubIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-800 dark:group-hover:fill-slate-300" />
        </Link>
        <ThemeSelector className="relative" position="top" />
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto scrollbar-hide bg-white px-6 py-6 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Shop Blocks</span>
                <Logo className="h-5 fill-slate-700 dark:fill-indigo-100/75" />
              </a>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Nav Link
                </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
      </Dialog>
    </div>
  )
}