/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from '@remix-run/react'
import { BackgroundShapes } from '~/components/BackgroundShapes'
import { Header } from '~/components/Header'

export default function Index() {  
  return (
    <>
    <div className="h-full max-h-[900px]">
      <Header />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <BackgroundShapes className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-slate-900 dark:text-indigo-100">
              Custom UI components for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-blue-400 dark:to-indigo-600">commerce</span>
            </h1>
            <p className="mt-6 text-xl font-medium leading-8 text-slate-500 dark:text-slate-400 sm:text-center">
              A component library for building modern storefronts. Styled with Tailwind CSS, powered by Shopify.
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <Link
                to="/docs/installation"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:from-blue-400 hover:to-indigo-600"
              >
                Get started
                <span className="text-indigo-200 ml-1" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
              <a
                href="#"
                className="inline-block rounded-full px-4 py-1.5 text-base font-semibold leading-7 text-blue-500 dark:text-slate-50 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20 dark:ring-indigo-200/10 dark:hover:ring-indigo-200/20"
              >
                View on GitHub
              </a>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <BackgroundShapes className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="min-h-[900px] dark:bg-black/20 px-24 py-24">
      <h2>Features and benefits</h2>
    </div>
    <div className="min-h-[900px] px-24 py-24">
      <h2>Playground</h2>
    </div>
    </>
  )
}