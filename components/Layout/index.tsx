import Floating from './Floating'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }: any) => {
    return (
        <>
            <Nav />
            <Floating />
            <main className='mx-4'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
