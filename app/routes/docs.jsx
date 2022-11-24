import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"


export const loader = async () => {
  return json({
   sections: [
      {
        title: 'Getting Started',
        links: [
          {
            title: 'Installation',
            to: '/docs/installation',
          }
        ],
      },
      {
        title: 'Components',
        links: [
          {
          title: 'Navbar',
          to: '/docs/navbar',
          },
        ],
      }
    ]  
  });
}

export default function Docs() {
  const { sections } = useLoaderData();
  return (
    <div className="flex w-full px-6 min-h-full">
      <div className="hidden w-60 flex-shrink-0 pr-3 lg:block mt-4">
        {sections.map((section, i) => (
          <div className="pb-10" key={i}>
            <div className="font-medium text-sm text-gray-400">{section.title}</div>
            <ul>
              {section?.links.map((navlink, i) => (
                <li className="text-slate-700 hover:text-indigo-700 dark:text-slate-400 hover:dark:text-slate-300 py-1 flex w-full" key={i}>
                  <Link className="w-full" to={navlink.to}>{navlink.title}</Link> 
                </li>
              ))}
            </ul>  
          </div>
        ))}
      </div>
      <div className="flex-grow px-6 lg:pr-0 min-h-full mt-4 overflow-auto">
        <Outlet />
      </div>
            {/* <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-50">
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
    </h2> */}
    </div>
  )
}