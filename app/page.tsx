import {
  Code,
  FileText,
  PanelsTopLeft,
  PlaySquare,
  SendToBack,
  ShoppingBasket,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-between ">
      <div className="w-full bg-ottoman-100 p-24">
        <div className="mx-w-5xl flex flex-col items-center">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://gigs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src="/gigs.svg"
                  alt="Gigs Logo"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          <div className="mt-24 max-w-screen-md text-center">
            <h2 className="text-2xl font-bold">Connect Sessions examples</h2>
            <p className="mt-4 text-lg text-gray-600">
              This application showcases how Connect Sessions can be utilized
              for buying an managing subscriptions.
            </p>
            <div className="mb-24 mt-8 flex justify-center gap-8">
              <a
                href="https://developers.gigs.com/docs/api/805ba2c145553-example-purchasing-and-managing-subscriptions-using-connect-sessions"
                className="flex items-center rounded-lg bg-ottoman-300 p-3 font-medium text-ottoman-900"
              >
                <FileText className="mr-2 h-5 w-5" />
                Read the guide
              </a>
              {false && (
                <div className="flex items-center rounded-lg bg-ottoman-300 p-3 font-medium text-ottoman-900">
                  <PlaySquare className="mr-2 h-5 w-5" />
                  Watch the video
                </div>
              )}
            </div>

            <div className="mt-12 grid w-full grid-cols-2 gap-6 text-left">
              <div className="rounded-lg border border-ottoman-200 bg-ottoman-50 p-4">
                <h3 className="flex items-center gap-2 font-bold text-gray-900">
                  <ShoppingBasket className="h-5 w-5" />
                  Purchasing subscriptions
                </h3>
                <p className="mt-4 text-sm text-gray-700">
                  Learn how to purchase a subscriptions for users you already
                  have collected details for in your own application.
                </p>
                <div className="mt-4 flex gap-8 font-medium text-gray-900">
                  <Link
                    href="/checkout"
                    className="flex items-center rounded-lg p-2 text-sm hover:bg-ottoman-100"
                  >
                    <PanelsTopLeft className="mr-2 h-4 w-4" /> Demo
                  </Link>
                  <a
                    href="https://github.com/gigs/connect-sessions-buy-manage-example/tree/main/app/(purchase)/checkout"
                    className="flex items-center rounded-lg p-2 text-sm hover:bg-ottoman-100"
                  >
                    <Code className="mr-2 h-4 w-4" /> Source
                  </a>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border border-ottoman-200 bg-ottoman-50 p-4">
                <h3 className="flex items-center gap-2 font-bold text-gray-900">
                  <SendToBack className="h-5 w-5" />
                  Managing Subscriptions
                </h3>
                <p className="mt-4 text-sm text-gray-700">
                  Learn how to manage existing subscriptions for your users.
                </p>
                <div className="mt-auto flex gap-8 font-medium text-gray-900 ">
                  <Link
                    href="/backoffice"
                    className="flex items-center rounded-lg p-2 text-sm hover:bg-ottoman-100"
                  >
                    <PanelsTopLeft className="mr-2 h-4 w-4" /> Demo
                  </Link>
                  <a
                    href="https://github.com/gigs/connect-sessions-buy-manage-example/tree/main/app/(manage)/backoffice"
                    className="flex items-center rounded-lg p-2 text-sm hover:bg-ottoman-100"
                  >
                    <Code className="mr-2 h-4 w-4" /> Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-32 grid text-center lg:w-full lg:max-w-5xl  lg:grid-cols-3 lg:text-left">
        <a
          href="https://developers.gigs.com/docs/api/0472dd6bfc47d-about-connect-sessions"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Guides{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Connect Sessions in our guides.
          </p>
        </a>

        <a
          href="https://developers.gigs.com/docs/api/aa3106d502cbc-create-a-connect-session"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            API Documentation{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find the Connect Sessions reference in our official API docs.
          </p>
        </a>

        <a
          href="mailto:support@gigs.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Support{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get help when you&apos;re stuck.
          </p>
        </a>
      </div>
    </main>
  )
}
