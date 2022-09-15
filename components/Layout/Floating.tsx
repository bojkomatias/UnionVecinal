import React from 'react'
import { footerNavigation as navigation } from '../../config/navigation'

function Floating() {
    return (
        <div className="fixed top-1/2 right-2 z-30 -translate-y-1/2 transform rounded-md bg-white bg-opacity-25 p-2 shadow">
            <div className="flex flex-col items-center gap-2">
                {navigation.social.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-primary opacity-95 hover:text-secondary"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                    </a>
                ))}
            </div>{' '}
        </div>
    )
}

export default Floating
