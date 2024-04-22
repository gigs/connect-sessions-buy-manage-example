import { ArrowRight, Ban, Check } from 'lucide-react'
import Link from 'next/link'

const SetupErrorPage = () => {
  const gigsProject = process.env.GIGS_PROJECT
  const gigsAPIKey = process.env.GIGS_API_KEY

  return (
    <div className="flex h-screen items-center justify-center bg-ottoman-100">
      <div className="flex max-w-screen-md flex-col rounded-lg bg-gray-50 p-12 text-center">
        <h1 className="text-lg font-bold">Setup incomplete</h1>
        <p>
          It looks like you&apos;re missing environment variables in the{' '}
          <span className="rounded bg-gray-300 p-1 font-mono text-sm">
            .env.local
          </span>{' '}
          file that are required in order to run this example project properly.
        </p>
        <a
          href="#"
          className=" mt-4 flex items-center gap-1 self-center text-ottoman-500 underline"
        >
          How to setup env variables <ArrowRight className="h-4 w-4" />
        </a>
        <div className="my-12 flex flex-col gap-4 self-center bg-gray-100 p-8 font-mono">
          <div className="flex items-center gap-2">
            <PresentMissingIcon present={!!gigsProject} />
            GIGS_PROJECT
          </div>
          <div className="flex items-center gap-2">
            <PresentMissingIcon present={!!gigsAPIKey} />
            GIGS_API_KEY
          </div>
        </div>

        <Link
          className="self-center rounded-lg bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-700"
          href="/"
        >
          Back to root
        </Link>
      </div>
    </div>
  )
}

const PresentMissingIcon = ({ present }: { present: boolean }) => {
  if (present) {
    return <Check className="h-4 w-4 text-green-600" />
  }

  return <Ban className="h-4 w-4 text-rose-500" />
}

export default SetupErrorPage
