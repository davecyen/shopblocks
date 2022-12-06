import { Fragment, useState } from 'react'

import { ClipboardIcon } from '@heroicons/react/24/outline'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Link } from '@remix-run/react'

const languages = [
  {
    section: 'Static',
    options: [
      {
        label: 'JSX',
        urlParam: '?c=jsx',
      }, 
      {
        label: 'TypeScript',
        urlParam: '?c=ts',
      }, 
      {
        label: 'HTML',
        urlParam: '?c=html',
      }, 
    ] 
  },
  {
    section: 'Shopify',
    options: [
      {
        label: 'Hydrogen',
        urlParam: '?c=hydrogen',
      }, 
      {
        label: 'Liquid',
        urlParam: '?c=liquid',
      }, 
    ] 
  },
]

function LanguageDropdown() {
  const [ selectedLanguage, setSelectedLanguage ] = useState(languages[0].options[0].label);
  return (
    <div className="max-w-36 text-right mr-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center font-semibold cursor-pointer focus:outline-none disabled:opacity-30 border-slate-700 bg-none text-slate-400 hover:border-slate-700/80 hover:bg-slate-700/80 focus:ring-1 focus:ring-slate-800/80 focus:ring-offset-0 disabled:hover:border-slate-800 disabled:hover:bg-slate-800 disabled:hover:text-white rounded-lg border-none border-transparent bg-slate-900/80 py-2 px-3 text-xs backdrop-blur-sm">
            {selectedLanguage}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-4 w-4"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 my-2 w-36 origin-top-right rounded-md bg-slate-900/90 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-xs p-2">
            {languages.map((language, i) => (
              <div key={i}>
                <div className="font-medium text-slate-400 px-2 mt-2 py-1">
                  {language.section}
                </div>
                <div>
                  {language.options?.map((option, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          onClick={() => setSelectedLanguage(option.label)}
                          to={option.urlParam}
                          className={`${
                            active ? 'text-slate-100 font-medium' : 'text-slate-300'
                          } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                        >
                          {option.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function CopyButton() {
  return (
    <button className="inline-flex items-center justify-center font-semibold cursor-pointer focus:outline-none disabled:opacity-30 border-slate-700 bg-none text-slate-400 hover:border-slate-700/80 hover:bg-slate-700/80 focus:ring-1 focus:ring-slate-800/80 focus:ring-offset-0 disabled:hover:border-slate-800 disabled:hover:bg-slate-800 disabled:hover:text-white rounded-lg border-none border-transparent bg-slate-900/80 py-2 px-3 text-xs backdrop-blur-sm">
      <span className="sr-only">Copy code</span>
      <ClipboardIcon className="h-4 w-4 mr-1" /> Copy
    </button>
  )
}

export function EditorButtons() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
        <div className="flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:m-1 md:rounded-lg">
          <LanguageDropdown />
          <CopyButton />
        </div>
      </div>
    </div>
  )
}