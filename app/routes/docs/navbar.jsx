import { useState } from "react"
import { Tab } from "@headlessui/react"
import { EyeIcon, CodeBracketIcon, DocumentIcon } from "@heroicons/react/24/outline"
import { LiveProvider, LivePreview } from "react-live"
import { AccountIcon, BagIcon } from '~/components/Icons'
import CodeEditor from "~/components/CodeEditor"
import Navbar from '~/routes/blocks/nav-light'
import NavDarkPreview from '~/routes/blocks/nav-dark'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const scope = {BagIcon, AccountIcon, Navbar, NavDarkPreview};

const testCode = `<Navbar />`;
const testDarkCode = `<NavDarkPreview />`;
const code = `<header className="bg-white text-slate-500 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
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
      <AccountIcon className="w-5 h-5" />
    </a>
    <button className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-900/5 hover:text-slate-800">
      <BagIcon className="w-5 h-5" />
      <div className="text-white bg-slate-500 hover:bg-slate-800 absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
        <span>3</span>
      </div>
    </button>
  </div>
</header>`;
const darkCode = `<header className="bg-slate-900 text-slate-100 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
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
    <AccountIcon className="w-5 h-5" />
  </a>
  <button className="relative flex items-center justify-center w-8 h-8 focus:ring-slate-100/5 hover:text-slate-50">
    <BagIcon className="w-5 h-5" />
    <div className="text-slate-900 bg-slate-100 hover:bg-slate-50 absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
      <span>3</span>
    </div>
  </button>
</div>
</header>`;

export const loader = async ({params}) => {
  return null;
};

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDarkIndex, setSelectedDarkIndex] = useState(0);
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50 mb-12">
        Navbars
      </h2>
      <div className="mb-12">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 my-3">
          <h3 className="text-lg font-medium tracking-tight text-gray-700 dark:text-slate-200 my-0">Simple Navbar (Light)</h3>
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
        <div className="rounded-lg bg-white dark:bg-slate-800 shadow-inner">
          <LiveProvider code={testCode} scope={scope}>
            {selectedIndex === 0 
              ? <LivePreview className="w-full overflow-auto resize-x" /> 
              : (
                <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
                  <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
                    <Tab className={({ selected }) =>
                      classNames(
                        'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                        selected
                          ? 'bg-slate-800 text-slate-300' 
                          : 'bg-slate-600 text-slate-700'
                      )
                    }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Navbar.jsx</Tab>
                  </Tab.List>
                  <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
                    <Tab.Panel>
                      <CodeEditor language="jsx" code={testCode} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )
            }
          </LiveProvider>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 my-3">
          <h3 className="text-lg font-medium tracking-tight text-gray-700 dark:text-slate-200 my-0">Simple Navbar (Dark)</h3>
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
        <div className="max-h-[560px] overflow-auto rounded-lg bg-white dark:bg-slate-800 shadow-inner">
          <LiveProvider code={testDarkCode} scope={scope}>
            {selectedDarkIndex === 0 
              ? <LivePreview className="w-full overflow-auto resize-x" /> 
              : (
                <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
                  <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
                    <Tab className={({ selected }) =>
                      classNames(
                        'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                        selected
                          ? 'bg-slate-800 text-slate-300' 
                          : 'bg-slate-600 text-slate-700'
                      )
                    }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Navbar.jsx</Tab>
                  </Tab.List>
                  <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
                    <Tab.Panel>
                      <CodeEditor language="jsx" code={testDarkCode} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )
            }
          </LiveProvider>
        </div>
      </div>
    </div>  
  )
}