import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { DocumentIcon } from '@heroicons/react/24/outline'
import CodeEditor from '~/components/CodeEditor'
import { Link } from '@remix-run/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const loader = async ({params}) => {
  return null;
};

export default function Installation() {
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const pluginCode = `module.exports = {
  //...
  plugins: ['@shopify/shopblocks'],
}`;
  const installCode = `npm install --save @shopify/shopblocks`;
  const cdnCode = `<head>
  <link href="https://cdn.shopblocks.com/shopblocks@0.0.1/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.shopblocks.com"></script>
  <!-- ... -->
</head>`;
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50 mb-12">
        Installation
      </h2>
      <div className="mb-16">
        <h3 className="text-xl font-medium tracking-tight mb-4">Using npm (recommended)</h3>
        <p className="mt-4 mb-3">Prerequesite: install and configure <Link to="https://tailwindcss.com">Tailwind CSS</Link> in your app.</p>
        <p className="mt-4 mb-3">1. Install the shopblocks plugin for Tailwind.</p>
        <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
          <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
            <Tab className={({ selected }) =>
              classNames(
                'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                selected
                  ? 'bg-slate-800 text-slate-300' 
                  : 'bg-slate-600 text-slate-700'
              )
            }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />Terminal</Tab>
          </Tab.List>
          <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
            <Tab.Panel>
              <CodeEditor language="bash" code={installCode} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <p className="mt-8 mb-3">2. Add the plugin to your Tailwind config:</p>
        <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
          <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
            <Tab className={({ selected }) =>
              classNames(
                'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                selected
                  ? 'bg-slate-800 text-slate-300' 
                  : 'bg-slate-600 text-slate-700'
              )
            }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />tailwind.config.js</Tab>
          </Tab.List>
          <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
            <Tab.Panel>
              <CodeEditor language="javascript" code={pluginCode} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="mb-16">
        <h3 className="text-xl font-medium tracking-tight mb-4">Using a CDN</h3>
        <p className="mt-4 mb-3">If you prefer to use a CDN, or if you're using a theme with Online Store, add the following to the <span className="font-mono text-sm">head</span> tag of your HTML (for example <span className="font-mono text-sm">index.html</span> or <span className="font-mono text-sm">theme.liquid</span>).</p>
        <Tab.Group selectedIndex={selectedFileIndex} onChange={setSelectedFileIndex}>
          <Tab.List className="flex space-x-1 rounded-tl-lg rounded-tr-lg bg-slate-900 pt-1 pr-1 pl-1">
            <Tab className={({ selected }) =>
              classNames(
                'rounded-tl-lg rounded-tr-lg py-1.5 px-2.5 text-xs font-mono leading-5 flex items-center',
                selected
                  ? 'bg-slate-800 text-slate-300' 
                  : 'bg-slate-600 text-slate-700'
              )
            }><DocumentIcon className="h-4 w-4 mr-2 font-bold opacity-70" />theme.liquid</Tab>
          </Tab.List>
          <Tab.Panels className="bg-slate-900 pl-1 pr-1 pb-1 rounded-br-lg rounded-bl-lg">
            <Tab.Panel>
              <CodeEditor language="markup" code={cdnCode} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
