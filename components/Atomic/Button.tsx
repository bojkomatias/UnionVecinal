import React from 'react'

export const Button = ({ children, ...buttonProps }: any) => {
    return (
        <button
            {...buttonProps}
            type="button"
            className="border-transparent rounded text-white focus:ring-indigo-500 inline-flex items-center border bg-primary px-4 py-2 text-neutral font-medium shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
            {children}
        </button>
    )
}
