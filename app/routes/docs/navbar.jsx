import { useState } from "react"
import { Tab } from "@headlessui/react"
import { EyeIcon, CodeBracketIcon, DocumentIcon } from "@heroicons/react/24/outline"
import { LiveProvider, LivePreview } from "react-live"
import { AccountIcon, BagIcon } from '~/components/Icons'
import { useSearchParams } from '@remix-run/react'
import CodeEditor from "~/components/CodeEditor"
import Navbar from '~/routes/blocks/Navbar'
import NavDarkPreview from '~/routes/blocks/nav-dark'
import PreviewCodeToggle from "~/components/PreviewCodeToggle"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const scope = {BagIcon, AccountIcon, Navbar, NavDarkPreview};

// const testCode = `<Navbar />`;
// const testDarkCode = `<NavDarkPreview />`;
const code = `
<header className="bg-white text-slate-500 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
  <div className="flex gap-12">
    <a className="font-bold text-slate-900" href="/">Hydrogen</a>
    <nav className="flex gap-8">
      <a className="hover:text-slate-800" target="_self" href="#">Collections</a>
      <a className="hover:text-slate-800" target="_self" href="#">Products</a>
      <a className="hover:text-slate-800" target="_self" href="#">Journal</a>
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
const darkCode = `
<header className="bg-slate-900 text-slate-100 flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
  <div className="flex gap-12">
    <a className="font-bold text-white" href="/">Hydrogen</a>
    <nav className="flex gap-8">
      <a className="hover:text-slate-50" target="_self" href="#">Collections</a>
      <a className="hover:text-slate-50" target="_self" href="#">Products</a>
      <a className="hover:text-slate-50" target="_self" href="#">Journal</a>
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

const blocks = [
  {
    title: 'Simple Navbar (Light)',
    hashId: 'simple-light',
    options: 
      {
        jsx: [
          {
            filename: 'Navbar.jsx',
            code: code, 
          },
        ],
        typescript: [
          {
            filename: 'Navbar.tsx',
            code: `// Navbar.tsx TypeScript`,
          },
        ]
      },
  },
  {
    title: 'Simple Navbar (Dark)',
    hashId: 'simple-dark',
    options: 
      {
        jsx: [
          {
            filename: 'Navbar.jsx',
            code: darkCode, 
          },
        ],
        typescript: [
          {
            filename: 'Navbar.tsx',
            code: `// Navbar.tsx TypeScript`,
          },
        ]
      },
  }
]

export const loader = async ({params}) => {
  return null;
};

export default function Nav() {
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);

  const [searchParams] = useSearchParams();

  
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50 mb-12">
        Navbars
      </h2>
      {blocks.map((block, i) => (
        <div className="mb-24" id={block.hashId} key={i}>
          <div className="grid grid-cols-2 items-start justify-between space-y-4 md:flex-row md:items-center my-3">
            <div className="text-lg font-medium tracking-tight text-gray-700 dark:text-slate-200 my-0">{block.title}</div>
            <Tab.Group>
              <div className="flex justify-end">
                <Tab.List className="inline-block w-auto rounded-full bg-gray-50 dark:bg-slate-800 p-1">
                  <Tab className={({ selected }) =>
                    classNames(
                      'rounded-full inline-block py-1.5 px-2.5 text-sm font-medium leading-5 items-center',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white dark:bg-slate-700 shadow text-blue-500 dark:text-slate-50' 
                        : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                    )
                  }><EyeIcon className="h-4 w-4 mr-2 font-medium opacity-70 inline-block" />Preview</Tab>
                  <Tab className={({ selected }) =>
                    classNames(
                      'rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 inline-block items-center',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white dark:bg-slate-700 shadow text-blue-500 dark:text-slate-50'
                        : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
                    )
                  }><CodeBracketIcon className="h-4 w-4 mr-2 font-medium opacity-70 inline-block" />Code</Tab>
                </Tab.List>
              </div>

              <Tab.Panels className="rounded-lg bg-white dark:bg-slate-800 shadow-inner col-span-2">
                <LiveProvider code={block.options.jsx[0].code} scope={scope}>
                  <Tab.Panel>
                    <div className="dots dark:dark-dots overflow-auto resize-x">
                      <LivePreview className="w-full" /> 
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
                      <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
                        <Tab className={({ selected }) =>
                          classNames(
                            'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                            selected
                              ? 'bg-slate-800 text-slate-300' 
                              : 'bg-slate-600 text-slate-700'
                          )
                        }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />{block.options.jsx[0].filename}</Tab>
                      </Tab.List>
                      <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
                        <Tab.Panel>
                          <CodeEditor language="jsx" code={block.options.jsx[0].code} />
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </Tab.Panel>
                </LiveProvider>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      ))}
      
    </div>  
  )
}