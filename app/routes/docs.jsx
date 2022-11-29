import { useEffect } from "react";
import { Link, NavLink, Outlet, useLoaderData, useLocation} from "@remix-run/react";
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
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ block: "start", behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="flex w-full px-6 min-h-full">
      <div className="hidden w-60 flex-shrink-0 pr-3 lg:block mt-4">
        {sections.map((section, i) => (
          <div className="pb-12" key={i}>
            <div className="font-medium text-sm text-slate-800 dark:text-slate-500 mb-2">{section.title}</div>
            <ul>
              {section?.links.map((navlink, i) => (
                <li className="py-1 flex-col w-full" key={i}>
                  <NavLink to={navlink.to} className={({isActive}) => 
                    isActive
                      ? 'text-blue-500 dark:text-slate-100 font-medium'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-300 font-normal'
                    }>{navlink.title}</NavLink> 
                    <ul>
                      {navlink?.sublinks?.map((sublink, i) => (
                        <li className="py-1 first:mt-2 last:mb-2 w-full text-sm pl-2" key={i}>
                          <Link className="text-slate-500 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-300 font-normal" to={sublink.to}>{sublink.title}</Link>
                        </li>
                      ))}
                    </ul>
                </li>
              ))}
            </ul>  
          </div>
        ))}
      </div>
      <div className="flex-grow px-6 lg:pr-0 min-h-full mt-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}