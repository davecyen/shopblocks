/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ClipboardIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { Search } from '~/components/Search'
import { ThemeSelector } from '~/components/ThemeSelector'
import { Link } from '@remix-run/react'
import { Logo } from '~/components/Logo'
import { GitHubIcon, FigmaIcon } from '~/components/Icons'
import { BackgroundShapes } from '~/components/BackgroundShapes'
import { CopyButton } from '~/components/CopyButton'
import { CodeEditor } from '~/components/CodeEditor'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDarkIndex, setSelectedDarkIndex] = useState(0);
  
  const code = `
  <header className="bg-white text-slate-500 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
    <div className="flex gap-12">
      <a className="font-bold text-slate-900" href="/">Hydrogen</a>
      <nav className="flex gap-8">
        <a className="hover:text-slate-800" target="_self" href="javascript:void(0);">Collections</a>
        <a className="hover:text-slate-800" target="_self" href="javascript:void(0);">Products</a>
        <a className="hover:text-slate-800" target="_self" href="javascript:void(0);">Journal</a>
      </nav>
    </div>
    <div className="flex items-center gap-1">
      <a className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-900/5 hover:text-slate-800" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <title>Account</title>
          <path 
            fillRule="evenodd" 
            d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z">
          </path>
        </svg>
      </a>
      <button className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-900/5 hover:text-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <title>Bag</title>
          <path 
            fillRule="evenodd" 
            d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z">
          </path>
        </svg>
        <div class="text-white bg-slate-500 hover:bg-slate-800 absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
          <span>3</span>
        </div>
      </button>
    </div>
  </header>`;
const darkCode = `
<header className="bg-slate-900 text-slate-100 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
  <div className="flex gap-12">
    <a className="font-bold text-white" href="/">Hydrogen</a>
    <nav className="flex gap-8">
      <a className="hover:text-slate-50" target="_self" href="javascript:void(0);">Collections</a>
      <a className="hover:text-slate-50" target="_self" href="javascript:void(0);">Products</a>
      <a className="hover:text-slate-50" target="_self" href="javascript:void(0);">Journal</a>
    </nav>
  </div>
  <div className="flex items-center gap-1">
    <a className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-100/5 hover:text-slate-50" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <title>Account</title>
        <path 
          fillRule="evenodd" 
          d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z">
        </path>
      </svg>
    </a>
    <button className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-100/5 hover:text-slate-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <title>Bag</title>
        <path 
          fillRule="evenodd" 
          d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z">
        </path>
      </svg>
      <div class="text-slate-900 bg-slate-100 hover:bg-slate-50 absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
        <span>3</span>
      </div>
    </button>
  </div>
</header>`;
  const pluginCode = `module.exports = {
  //...
  plugins: ['shopblocks'],
}`;
  const installCode = `npm install @shopify/shopblocks`;
  const cdnCode = `<link href="https://cdn.shopify.com/shopblocks@0.0.1/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.shopify.com"></script>`;
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
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto scrollbar-hide bg-white px-6 py-6 lg:hidden">
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
    </div>
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-slate-900 dark:text-indigo-100">
              Custom UI components for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-400 dark:to-indigo-600">commerce</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-center">
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
                className="inline-block rounded-full px-4 py-1.5 text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 hover:from-blue-400 to-indigo-500 hover:to-indigo-500 dark:text-slate-50 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20 dark:ring-indigo-200/10 dark:hover:ring-indigo-200/20"
              >
                View on GitHub
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
      <div className="my-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50 mb-16">
          Getting started
        </h2>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-xl text-gray-700 dark:text-slate-200 mb-4">Recommended Installation</h3>
          <p className="text-slate-600 my-3">We recommend installing shopblocks as a Tailwind CSS plugin. In your terminal:</p>
          <CodeEditor language="bash" code={installCode} />
          <p className="text-slate-600 my-3">Then, in your <span className="font-mono text-sm">tailwind.config.js</span> file:</p>
          <CodeEditor language="javascript" code={pluginCode} />
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-xl text-gray-700 dark:text-slate-200 mb-4">Using a CDN</h3>
          <p className="text-slate-600 my-3">Alternatively, add the following to the <span className="font-mono text-sm">head</span> tag of your root HTML file, for example <span className="font-mono text-sm">index.html, root.jsx, or _document.tsx</span>.</p>
          <CodeEditor language="markup" code={cdnCode} />
        </div>
      </div>
      <div className="my-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50 mb-12">
          Navigation
        </h2>
        <div className="mb-12">
          <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 my-2">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-xl text-gray-700 dark:text-slate-200 my-0">Simple Navbar (Light)</h3>
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <Tab.List className="flex space-x-1 rounded-full bg-gray-50 dark:bg-slate-800 p-1">
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-slate-50' 
                      : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                  )
                }><EyeIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Preview</Tab>
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-slate-50'
                      : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                  )
                }><CodeBracketIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Code</Tab>
              </Tab.List>
            </Tab.Group>
          </div>
          <div className="max-h-[560px] overflow-scroll rounded-lg">
            <LiveProvider code={code}>
              {selectedIndex === 0 ? 
                <LivePreview className="dots dark:dark-dots" /> : 
                <CodeEditor language="jsx" code={code} />
              }
            </LiveProvider>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 my-2">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-xl text-gray-700 dark:text-slate-200 my-0">Simple Navbar (Dark)</h3>
            <Tab.Group selectedIndex={selectedDarkIndex} onChange={setSelectedDarkIndex}>
              <Tab.List className="flex space-x-1 rounded-full bg-gray-50 dark:bg-slate-800 p-1">
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-slate-50' 
                      : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                  )
                }><EyeIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Preview</Tab>
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-slate-50'
                      : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                  )
                }><CodeBracketIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Code</Tab>
              </Tab.List>
            </Tab.Group>
          </div>
          <div className="max-h-[560px] overflow-scroll rounded-lg">
            <LiveProvider code={darkCode}>
              {selectedDarkIndex === 0 ? 
                <LivePreview className="dots dark:dark-dots" /> :
                <CodeEditor language="jsx" code={darkCode} />
              }
            </LiveProvider>
          </div>
        </div>
      </div>  
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50">
        Branding and themes
      </h2>
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