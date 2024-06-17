import { Link, router } from '@inertiajs/react';
import React from 'react';

export default function DemoPageOne({ place, facts }) {
  const loadFacts = () => {
    router.reload({ only: ['facts'] })
  };

  return (
    <>
      <div className="rounded-md shadow flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 mb-8">
        <p className="text-sm leading-6 text-white">
          <Link
            href='/groceries'
          >
            <span>A <strong className="font-semibold">more advanced demo</strong> can be found here!</span>
          </Link>
        </p>
      </div>
      <div className="px-4 sm:px-0">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Hello, {place}!</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">To learn more about the world, click the <em>load facts</em> button.</p>
          </div>
          <div className="mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              onClick={loadFacts}
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Load Facts
            </button>
          </div>
        </div>
      </div>
      {
        facts && (
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {facts.map(fact => (
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={fact.key}>
                  <dt className="text-sm font-medium leading-6 text-gray-900">{fact.key}</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )
      }
    </>
  );
}
