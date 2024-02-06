import { CodeBracketIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import {
  Code,
  FileText,
  PanelsTopLeft,
  PlaySquare,
  SendToBack,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-between ">
      <div className="bg-ottoman-100 p-24 w-full">
        <div className="mx-w-5xl flex items-center flex-col">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://gigs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
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

          <div className="text-center max-w-screen-md mt-24">
            <h2 className="text-2xl font-bold">Connect Sessions examples</h2>
            <p className="text-lg mt-4 text-gray-600">
              This application showcases how Connect Sessions can be utilized
              for buying an managing subscriptions.
            </p>
            <div className="flex justify-center mt-8 gap-8 mb-24">
              <div className="flex items-center font-medium bg-ottoman-300 text-ottoman-900 p-3 rounded-lg">
                <FileText className="w-5 h-5 mr-2" />
                Read the guide
              </div>
              <div className="flex items-center font-medium bg-ottoman-300 text-ottoman-900 p-3 rounded-lg">
                <PlaySquare className="w-5 h-5 mr-2" />
                Watch the video
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-6 mt-12 text-left">
              <div className="p-4 rounded-lg bg-ottoman-50 border border-ottoman-200">
                <h3 className="text-gray-900 font-bold flex gap-2 items-center">
                  <ShoppingBasket className="w-5 h-5" />
                  Purchasing subscriptions
                </h3>
                <p className="text-gray-700 text-sm mt-4">
                  Learn how to purchase a subscriptions for users you already
                  have collected details for in your own application.
                </p>
                <div className="flex gap-8 mt-4 text-gray-900 font-medium">
                  <Link
                    href="/checkout"
                    className="flex items-center text-sm hover:bg-ottoman-100 rounded-lg p-2"
                  >
                    <PanelsTopLeft className="h-4 w-4 mr-2" /> Demo
                  </Link>
                  <a className="flex items-center text-sm hover:bg-ottoman-100 rounded-lg p-2">
                    <Code className="h-4 w-4 mr-2" /> Source
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-ottoman-50 border border-ottoman-200 flex flex-col">
                <h3 className="text-gray-900 font-bold flex gap-2 items-center">
                  <SendToBack className="w-5 h-5" />
                  Managing Subscriptions
                </h3>
                <p className="text-gray-700 text-sm mt-4">
                  Learn how to manage existing subscriptions for your users.
                </p>
                <div className="flex gap-8 mt-auto text-gray-900 font-medium ">
                  <Link
                    href="/backoffice"
                    className="flex items-center text-sm hover:bg-ottoman-100 rounded-lg p-2"
                  >
                    <PanelsTopLeft className="h-4 w-4 mr-2" /> Demo
                  </Link>
                  <a className="flex items-center text-sm hover:bg-ottoman-100 rounded-lg p-2">
                    <Code className="h-4 w-4 mr-2" /> Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-32 grid text-center lg:max-w-5xl lg:w-full  lg:grid-cols-3 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Guides{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Connect Sessions in our guides.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            API Documentation{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find the Connect Sessions reference in our official API docs.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Support{" "}
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
  );
}
