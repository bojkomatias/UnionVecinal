import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="/uv.png" type="image" />
                    <title>Unión Vecinal</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
