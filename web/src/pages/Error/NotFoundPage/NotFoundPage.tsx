import { Link, routes } from '@redwoodjs/router'

export default () => (
  <div className="sm:px-6 sm:py-24 min-h-full bg-white px-4 py-16 lg:grid lg:place-items-center lg:px-8">
    <div className="mx-auto max-w-max">
      <main className="sm:flex">
        <p className="text-4xl text-red-600 sm:text-5xl font-extrabold">404</p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl text-gray-900 sm:text-5xl font-extrabold tracking-tight">
              Page not found
            </h1>
            <p className="text-base text-gray-500 mt-1">
              Check the URL in the address bar and please try again.
            </p>
          </div>
          <div className="sm:border-l sm:border-transparent sm:pl-6 mt-10 flex space-x-3">
            <Link
              to={routes.landing()}
              className="bg-red-600 text-sm hover:bg-red-700 focus:ring-red-500 inline-flex items-center rounded-md border border-transparent px-4 py-2 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  </div>
)
