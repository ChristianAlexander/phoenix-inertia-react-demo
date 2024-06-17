import React from 'react';
import { Link, useForm } from '@inertiajs/react';

export default function NewGrocery() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    quantity: 1
  });

  function submit(e) {
    e.preventDefault();
    post('/groceries');
  }

  return (
    <form onSubmit={submit}>
      <div className="space-y-12">
        <Link
          href='/groceries'
          className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          ← Back to List
        </Link>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">New Grocery</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Create a record of a grocery item you need to buy.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  value={data.name}
                  onChange={e => setData('name', e.target.value)}
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              {errors?.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>

              <div className="mt-2">
                <input
                  type="number"
                  value={data.quantity}
                  onChange={e => setData('quantity', e.target.value)}
                  id="quantity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors?.quantity && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.quantity}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          disabled={processing}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

// <form onSubmit={submit} className="flex flex-col max-w-md">
//   <label>Name</label>
//   <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
//   {errors.name && <div>{errors.name}</div>}
//   <label>Quantity</label>
//   <input type="number" value={data.quantity} onChange={e => setData('quantity', e.target.value)} />
//   {errors.quantity && <div>{errors.quantity}</div>}
//   <button type="submit" disabled={processing}>Create</button>
// </form>
