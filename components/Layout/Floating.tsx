import React from 'react'
import { footerNavigation as navigation } from '../../config/navigation'

function Floating() {
  return (
    <div className='fixed top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-md z-30 border border-neutral-200 shadow'>
      <div className="flex flex-col items-center gap-2">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-primary hover:text-secondary opacity-95"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                    ))}
                </div>
    </div>
  )
}

export default Floating