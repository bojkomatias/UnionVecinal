import Image from 'next/image'

export default function Page() {
    return (
        <div className="mx-auto my-10 min-h-screen max-w-7xl  px-4 md:my-20 md:px-6">
            <div className=" text-center">
                <div className="relative mx-auto lg:w-2/3">
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
                <p className="prose mx-auto p-10">
                    Somos una organización ideológicamente autonómica e
                    independiente. Qué significa esto? Que no dependemos de los
                    grandes partidos nacionales sino que desarrollamos nuestras
                    propias ideas.
                    <br /> Somos una Unión que promueve la democracia
                    participativa , abierta e inclusiva en la que la voz de los
                    vecinos es la que debe ser escuchada.
                    <br /> Porqué vecinal? Porque el vecino de Libertador San
                    Martín es el centro de todas nuestras acciones. Porque
                    creemos firmemente que quién construye nuestra localidad día
                    a día debe ser el principal destinatario de todas nuestras
                    políticas.
                </p>
            </div>
        </div>
    )
}

// ! If need use for custom per page layout
// Page.getLayout = function getLayout(page: ReactElement) {
//     return <NestedLayout>{page}</NestedLayout>
// }
