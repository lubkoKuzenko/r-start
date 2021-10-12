import { FC } from 'react';
import { Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon
} from '@heroicons/react/solid';

import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const TailWindPage: FC<any> = () => {
  return (
    <>
      <div className='lg:flex lg:items-center lg:justify-between'>
        <div className='flex-1 min-w-0'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Back End Developer</h2>
          <div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
            <div className='mt-2 flex items-center text-sm text-gray-500'>
              <BriefcaseIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
              Full-time
            </div>
            <div className='mt-2 flex items-center text-sm text-gray-500'>
              <LocationMarkerIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
              Remote
            </div>
            <div className='mt-2 flex items-center text-sm text-gray-500'>
              <CurrencyDollarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
              $120k &ndash; $140k
            </div>
            <div className='mt-2 flex items-center text-sm text-gray-500'>
              <CalendarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div className='mt-5 flex lg:mt-0 lg:ml-4'>
        <span className='hidden sm:block'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <PencilIcon className='-ml-1 mr-2 h-5 w-5 text-gray-500' aria-hidden='true' />
            Edit
          </button>
        </span>

          <span className='hidden sm:block ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <LinkIcon className='-ml-1 mr-2 h-5 w-5 text-gray-500' aria-hidden='true' />
            View
          </button>
        </span>

          <span className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <CheckIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            Publish
          </button>
        </span>

          {/* Dropdown */}
          <Menu as='span' className='ml-3 relative sm:hidden'>
            <Menu.Button
              className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              More
              <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 text-gray-500' aria-hidden='true' />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                className='origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <ul className="divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.email} className="py-4 flex">
              <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div
            className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
          <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
            <div className='max-w-md mx-auto'>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
                  <ul className='list-disc space-y-2'>
                    <li className='flex items-start'>
                <span className='h-6 flex items-center sm:h-7'>
                  <svg className='flex-shrink-0 h-5 w-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
                    <path fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd' />
                  </svg>
                </span>
                      <p className='ml-2'>
                        Customizing your
                        <code className='text-sm font-bold text-gray-900'>tailwind.config.js</code> file
                      </p>
                    </li>
                    <li className='flex items-start'>
                <span className='h-6 flex items-center sm:h-7'>
                  <svg className='flex-shrink-0 h-5 w-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
                    <path fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd' />
                  </svg>
                </span>
                      <p className='ml-2'>
                        Extracting classes with
                        <code className='text-sm font-bold text-gray-900'>@apply</code>
                      </p>
                    </li>
                    <li className='flex items-start'>
                <span className='h-6 flex items-center sm:h-7'>
                  <svg className='flex-shrink-0 h-5 w-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
                    <path fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd' />
                  </svg>
                </span>
                      <p className='ml-2'>Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
                </div>
                <div className='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a href='https://tailwindcss.com/docs' className='text-cyan-600 hover:text-cyan-700'> Read the
                      docs &rarr; </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailWindPage;
