import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  Phone,
  PlusCircle,
  Replace,
  ShoppingCart,
  Smartphone,
  Trash,
  User2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function BackOfficePage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Image
              alt="Company Logo"
              className="h-6 w-auto"
              height={20}
              src="/tigr-logo.webp"
              width={100}
            />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <User2 className="h-4 w-4" />
                Profile
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Smartphone className="h-4 w-4" />
                Devices
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <Phone className="h-4 w-4" />
                Phone Plans
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Phone Plans</h1>
            <Button className="ml-auto" size="sm">
              Add Plan
            </Button>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Plan A</CardTitle>
                <CardDescription>$50.00 per month</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <ul className="flex gap-4">
                  <li>Unlimited Data</li>
                  <li>Unlimited Voice</li>
                  <li>1000 SMS</li>
                </ul>
                <div className="flex items-center w-full">
                  <Progress value={60} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  className="text-blue-500 flex items-center gap-2"
                  href="#"
                >
                  <Trash className="h-4 w-4" />
                  Cancel Plan
                </Link>
                <Link
                  className="text-green-500 flex items-center gap-2"
                  href="#"
                >
                  <PlusCircle className="h-4 w-4" />
                  Buy Addon
                </Link>
                <Link
                  className="text-yellow-500 flex items-center gap-2"
                  href="#"
                >
                  <Replace className="h-4 w-4" />
                  Change Plan
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
