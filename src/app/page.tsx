'use client';

import Link from "next/link";
import React, { useState, useTransition } from "react";
import { shorternUrl } from "./serverActions/ShorternUrlAction";

export default function Home() {

  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {

    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          URL Shortener
        </h1>

        <form action={shorternUrl} className="space-y-6">
          <input type="text" placeholder="Enter URL" name="originalUrl" className="input input-bordered w-full" />
          <button type="submit" className="btn btn-primary w-full">
            Shortern
          </button>
          <div className="mt-6 text-center">
            <Link href='/urls'>
              <span className="btn btn-secondary w-full">
                View All Shorterend URLs
              </span>
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
}
