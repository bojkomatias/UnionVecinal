/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Button } from '../Atomic/Button'
import Image from 'next/image'

import { navigation } from '../../config/navigation'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className="relative bg-base-200 shadow">
            <div
                className="pointer-events-none absolute inset-0 z-30 shadow"
                aria-hidden="true"
            />
            <div className="relative z-20">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:space-x-10 lg:px-8">
                    <a
                        href="/"
                        className="flex transition-all duration-1000 hover:-rotate-1 hover:scale-105"
                    >
                        <Image
                            width={150}
                            height={80}
                            src="/logo-color.png"
                            alt="Logo"
                        />
                    </a>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center rounded bg-base-100 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-between">
                        <Popover.Group as="nav" className="flex space-x-10">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="cursor pointer group relative"
                                >
                                    <a
                                        href={item.href}
                                        className="text-base font-medium text-base-700 group-hover:text-base-900"
                                    >
                                        {item.name}
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 border-b-4 border-primary-700 transition-all duration-500 group-hover:w-full"></span>
                                </div>
                            ))}
                        </Popover.Group>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-gray-50 ring-black divide-y-2 rounded bg-base-100 shadow-lg ring-1 ring-opacity-5">
                        <div className="px-5 pt-5 pb-6 sm:pb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        width={150}
                                        height={80}
                                        src="/logo-color.png"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center rounded bg-base-100 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-8">
                                <nav></nav>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className="grid grid-cols-2 gap-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-500 hover:text-gray-900 text-base font-medium"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
