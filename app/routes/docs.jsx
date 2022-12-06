import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData, useLocation} from "@remix-run/react";
import { FigmaIcon, GitHubIcon } from '~/components/Icons'
import { ThemeSelector } from "~/components/ThemeSelector"
import { json } from "@remix-run/node"
import { Logo } from "~/components/Logo"
import { Search } from "~/components/Search"
import { Header } from "~/components/Header"

export const loader = async () => {
  return json({
   sections: [
      {
        title: 'Getting Started',
        links: [
          {
            title: 'Installation',
            to: '/docs/installation',
          },
          {
            title: 'Branding & Themes',
            to: '/docs/branding-and-themes',
          },
          {
            title: 'Starters',
            to: '/docs/starters',
          }
        ],
      },
      {
        title: 'Components',
        links: [
          {
          title: 'Navbar',
          to: '/docs/navbar',
          sublinks: [
            {
              title: 'Simple Navbar (Light)',
              to: '/docs/navbar#simple-light',
            },
            {
              title: 'Simple Navbar (Dark)',
              to: '/docs/navbar#simple-dark',
            },
          ]
          },
          {
            title: 'Product Cards',
            to: '/docs/product-lists',
          },
          {
            title: 'Product Details',
            to: '/docs/product-details',
          },
          {
            title: 'Search',
            to: '/docs/search',
          },
          {
            title: 'Cart',
            to: '/docs/cart',
          },
          {
            title: 'Accounts',
            to: '/docs/accounts',
          },
          {
            title: 'Orders',
            to: '/docs/orders',
          },
          {
            title: 'Marketing',
            to: '/docs/marketing',
          },
          {
            title: 'Footer',
            to: '/docs/footer',
          },
        ],
      },
    ]  
  });
}

export default function Docs() {
  const { sections } = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    console.log('location pathnmame is', location.pathname)
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ block: "start", behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
    <div className="w-full sm:hidden">
      <Header />
    </div>
    <div className="flex w-full min-h-full">
      <div className="hidden flex-col w-60 flex-shrink-0 pr-6 lg:block mt-12 pl-6">
        <div className="flex items-center">
          <a href="/" className="-m-0.5 p-0.5 flex flex-1">
            <span className="sr-only">Shop Blocks</span>
            <Logo className="h-5 fill-slate-700 dark:fill-slate-100" />
          </a>
        </div>
        <div className="mt-6 mb-16">
          <Search />
        </div>
        {sections.map((section, i) => (
          <div className="pb-8" key={i}>
            <div className="font-medium text-sm text-slate-800 dark:text-slate-500 mb-2">{section.title}</div>
            <ul>
              {section?.links.map((navlink, i) => (
                <li className="py-1 flex-col w-full" key={i}>
                  <NavLink to={navlink.to} className={({isActive}) => 
                    isActive
                      ? 'text-blue-500 dark:text-slate-100 font-medium'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-300 font-normal'
                    }>{navlink.title}</NavLink> 
                    {(navlink?.sublinks && navlink.to === location.pathname ) && (
                      <ul>
                        {navlink?.sublinks?.map((sublink, i) => (
                          <li className="py-1 first:mt-2 last:mb-2 w-full text-sm pl-2" key={i}>
                            <Link className="text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-300 font-normal" to={sublink.to}>{sublink.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                </li>
              ))}
            </ul>  
          </div>
        ))}
        <div className="py-6 flex items-center fixed bottom-0">
          <Link to="https://figma.com" className="group mr-4" aria-label="Figma">
            <FigmaIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-800 dark:group-hover:fill-slate-300" />
          </Link>
          <Link to="https://github.com" className="group mr-4" aria-label="GitHub">
            <GitHubIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-800 dark:group-hover:fill-slate-300" />
          </Link>
          <div className="flex">
            <ThemeSelector className="relative z-10" position="bottom" />
          </div>
        </div>
      </div>
      <div className="flex-grow px-4 md:px-12 min-h-full pt-12 overflow-auto border-l border-1 border-slate-100 dark:border-slate-700">
        <Outlet />
      </div>
    </div>
  </>
  )
}