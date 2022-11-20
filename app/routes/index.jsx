/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { Search } from '~/components/Search'
import { ThemeSelector } from '~/components/ThemeSelector'
import { Link } from '@remix-run/react'
import { Logo } from '~/components/Logo'
import { GitHubIcon, FigmaIcon } from '~/components/Icons'
import { BackgroundShapes } from '~/components/BackgroundShapes'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const code = `
  <h1 className="text-3xl font-bold">Hello World</h1>
  `

  return (
    <>
    <div className="min-h-full">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <BackgroundShapes className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Shop Blocks</span>
                <Logo className="h-5 fill-slate-700 dark:fill-indigo-100/75" />
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
            <ThemeSelector className="relative z-10 mr-4" />
            <Link to="https://figma.com" className="group mr-4" aria-label="Figma">
              <FigmaIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
            </Link>
            <Link to="https://github.com" className="group" aria-label="GitHub">
              <GitHubIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
            </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
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
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Nav Link
                    </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-slate-900 dark:text-indigo-100">
              Customizable UI components for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-400 dark:to-indigo-600">commerce</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-center">
              A component library for building custom storefronts. Styled with Tailwind CSS.
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:from-blue-400 hover:to-indigo-600"
              >
                Get started
                <span className="text-indigo-200 ml-1" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a
                href="#"
                className="inline-block rounded-full px-4 py-1.5 text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 hover:from-blue-400 to-indigo-500 hover:to-indigo-500 dark:text-indigo-300 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20 dark:ring-indigo-200/10 dark:hover:text-indigo-200 dark:hover:ring-indigo-200/20"
              >
                View on GitHub
                <span className="text-indigo-500 ml-1" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <BackgroundShapes className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="px-6 pt-6 lg:px-32 min-h-full">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Getting started
      </h2>
      
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Branding
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100 mb-12">
        Navigation
      </h2>
      <LiveProvider code={code}>
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 my-2">
          <h3 className="text-xl font-medium tracking-tight sm:text-lg text-slate-900 dark:text-indigo-100 my-0">Navbar with leading links and trailing buttons</h3>
          <div className="flex space-x-2 flex-wrap">
            <Tab.Group>
              <Tab.List>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </Tab.List>
              <div className="w-full">
                <Tab.Panels>
                  <Tab.Panel>Content 1</Tab.Panel>
                  <Tab.Panel>Content 2</Tab.Panel>
                  <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
        <div className="relative">
          <LivePreview className="dark:bg-slate-800 bg-gray-50 flex h-[560px] overflow-scroll items-center justify-center rounded-xl p-2" />
          <div className="relative">
            <div className="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
              <div className="flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:m-1 md:rounded-lg">
                <button className="inline-flex items-center justify-center font-semibold cursor-pointer focus:outline-none disabled:opacity-30 border-slate-700 bg-none text-slate-400 hover:border-slate-800/80 hover:bg-slate-800/80 focus:ring-1 focus:ring-slate-800/80 focus:ring-offset-0 disabled:hover:border-slate-800 disabled:hover:bg-slate-800 disabled:hover:text-white rounded-xl border-none border-transparent bg-transparent py-2 px-3 text-xs">
                  <span className="sr-only">Copy code</span>
                  <ClipboardIcon className="h-5 w-5 mr-1" /> Copy
                </button>
              </div>
            </div>
            <LiveEditor className="bg-slate-700 flex h-[560px] overflow-scroll rounded-xl p-2 font-mono text-sm" />
            <LiveError />
          </div>
        </div>
      </LiveProvider>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Search
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Filter and sort
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Product grids
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Product details
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Ratings and reviews
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Cart
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Accounts
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Orders
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Blog
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Forms
      </h2>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-indigo-100">
        Localization
      </h2>
    </div>
    </>
  )
}