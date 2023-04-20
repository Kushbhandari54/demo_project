/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ErrorPage() {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => route.push("/"), 3000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen space-y-8  flex-col">
      <div>
        <h1 className="font-extrabold text-5xl ">404</h1>
      </div>
      <h2 className=" font-extrabold text-4xl">
        We are sorry, Page Not Found!
      </h2>
      <p className="font-semibold text-lg ">
        The Page your are looking for might have been removed had its name
        changed or temporily unavailable
      </p>

      {/* <Link
        href="/"
        className="p-4 border-2 bg-blue-500 rounded-2xl hover:border-green-950 hover:bg-green-600 shadow-md font-medium   "
      >
        Back to HomePage
      </Link> */}

      <a
        className="p-4 border-2 bg-blue-500 rounded-2xl hover:border-green-950 hover:bg-green-600 shadow-md font-medium   "
        onClick={() => route.push("/")}
      >
        Back to HomePage
      </a>
    </div>
  );
}

export default ErrorPage;
