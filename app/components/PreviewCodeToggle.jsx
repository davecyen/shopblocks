import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreviewCodeToggle() {
  const [ selectedIndex, setSelectedIndex ] = useState(0)
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex space-x-1 rounded-full bg-gray-50 dark:bg-slate-800 p-1">
        <Tab className={({ selected }) =>
          classNames(
            'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
              ? 'bg-white dark:bg-slate-700 shadow text-blue-500 dark:text-slate-50' 
              : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
          )
        }><EyeIcon className="h-4 w-4 mr-2 font-medium opacity-70" />Preview</Tab>
        <Tab className={({ selected }) =>
          classNames(
            'w-full rounded-full py-1.5 px-2.5 text-sm font-medium leading-5 flex items-center',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
              ? 'bg-white dark:bg-slate-700 shadow text-blue-500 dark:text-slate-50'
              : 'text-slate-300 dark:text-slate-500 hover:bg-white/[0.12] dark:hover:bg-slate-500/[0.12] hover:text-slate-700'
          )
        }><CodeBracketIcon className="h-4 w-4 mr-2 font-medium opacity-70" />Code</Tab>
      </Tab.List>
    </Tab.Group>
  )
}