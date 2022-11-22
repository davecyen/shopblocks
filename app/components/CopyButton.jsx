import { ClipboardIcon } from '@heroicons/react/24/outline'

export function CopyButton() {
  return (
  <div className="relative">
    <div className="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
      <div className="flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:m-1 md:rounded-lg">
        <button className="inline-flex items-center justify-center font-semibold cursor-pointer focus:outline-none disabled:opacity-30 border-slate-700 bg-none text-slate-400 hover:border-slate-700/80 hover:bg-slate-700/80 focus:ring-1 focus:ring-slate-800/80 focus:ring-offset-0 disabled:hover:border-slate-800 disabled:hover:bg-slate-800 disabled:hover:text-white rounded-lg border-none border-transparent bg-transparent py-2 px-3 text-xs backdrop-blur-sm">
          <span className="sr-only">Copy code</span>
          <ClipboardIcon className="h-4 w-4 mr-1" /> Copy
        </button>
      </div>
    </div>
  </div>
  )
}