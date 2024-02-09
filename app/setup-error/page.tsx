import { ArrowRight, Ban, Check } from "lucide-react";
import Link from "next/link";

const SetupErrorPage = () => {
  const gigsProject = process.env.GIGS_PROJECT;
  const gigsAPIKey = process.env.GIGS_API_KEY;
  const gigsUser = process.env.GIGS_MANAGABLE_USER_ID;

  return (
    <div className="bg-ottoman-100 h-screen flex items-center justify-center">
      <div className="max-w-screen-md bg-gray-50 flex flex-col p-12 rounded-lg text-center">
        <h1 className="text-lg font-bold">Setup incomplete</h1>
        <p>
          It looks like you&apos;re missing environment variables in the{" "}
          <span className="font-mono text-sm bg-gray-300 p-1 rounded">
            .env.local
          </span>{" "}
          file that are required in order to run this example project properly.
        </p>
        <a
          href="#"
          className=" text-ottoman-500 underline flex items-center gap-1 self-center mt-4"
        >
          How to setup env variables <ArrowRight className="h-4 w-4" />
        </a>
        <div className="bg-gray-100 flex flex-col self-center p-8 font-mono gap-4 my-12">
          <div className="flex items-center gap-2">
            <PresentMissinIcon present={!!gigsProject} />
            GIGS_PROJECT
          </div>
          <div className="flex items-center gap-2">
            <PresentMissinIcon present={!!gigsAPIKey} />
            GIGS_API_KEY
          </div>
          <div className="flex items-center gap-2">
            <PresentMissinIcon present={!!gigsUser} />
            GIGS_MANAGABLE_USER_ID
          </div>
        </div>

        <Link
          className="bg-neutral-800 hover:bg-neutral-700 py-2 px-4 text-white rounded-lg self-center"
          href="/"
        >
          Back to root
        </Link>
      </div>
    </div>
  );
};

const PresentMissinIcon = ({ present }: { present: boolean }) => {
  if (present) {
    return <Check className="w-4 h-4 text-green-600" />;
  }

  return <Ban className="w-4 h-4 text-rose-500" />;
};

export default SetupErrorPage;
