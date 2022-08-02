import Image from 'next/image'

export default function Page() {
    return (
        <div className="mx-auto my-16 min-h-screen max-w-7xl  px-4 sm:my-24 sm:px-6">
            <div className=" text-center">
                <p className="p-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam illum temporibus inventore consectetur adipisci ad
                    repellat velit veniam quidem, error totam sunt culpa earum
                    illo aspernatur autem, quos accusamus tempora.
                </p>
                <div className="relative">
                    <div className="">
                        <Image
                            width={1920}
                            height={1080}
                            src="/maqueta.gif"
                            alt="Logo"
                            className=" rounded-xl"
                        />
                    </div>
                    <div className="absolute top-1/3 left-1/2 origin-center -translate-x-1/2 ">
                        <Image
                            width={500}
                            height={270}
                            src="/logo-gris.png"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// ! If need use for custom per page layout
// Page.getLayout = function getLayout(page: ReactElement) {
//     return <NestedLayout>{page}</NestedLayout>
// }
