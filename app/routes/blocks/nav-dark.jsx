import { BagIcon, AccountIcon } from '~/components/Icons'

export const loader = async ({params}) => {
  return null;
};

export default function NavDarkPreview() {
  return (
    <div className="dots dark:dark-dots">
      <header className="bg-slate-900 text-slate-100 flex items-center transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8">
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
      </header>
    </div>
  )
}