import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { DocumentIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import CodeEditor from '~/components/CodeEditor'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function EditorTabs(props) {
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
      <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
        <Tab className={({ selected }) =>
          classNames(
            'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
            selected
              ? 'bg-slate-800 text-slate-300' 
              : 'bg-slate-600 text-slate-700'
          )
        }><CommandLineIcon className="h-4 w-4 mr-2 font-bold opacity-70" />{props.fileName}</Tab>
      </Tab.List>
      <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
        <Tab.Panel>
          <CodeEditor language="bash" code={props.code} showDropdown={props.showDropdown} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}