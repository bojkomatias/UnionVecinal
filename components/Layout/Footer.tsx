/* This example requires Tailwind CSS v2.0+ */
import { footerNavigation as navigation } from '../../config/navigation'

export default function Footer() {
    return (
        <footer className="bg-primary">
            <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer"
                >
                    {/* {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a
                                href={item.href}
                                className="text-neutral-200 hover:text-white"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))} */}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white opacity-70 drop-shadow hover:opacity-100"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="text-neutral mt-8 text-center text-neutral-100">
                    &copy; 2022 Unión Vecinal. Libertador San Martín.
                </p>
            </div>
        </footer>
    )
}
