import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Helmet htmlAttributes={{
                lang: 'en',
            }}>
                <script src="https://kit.fontawesome.com/0eb4525a07.js" crossOrigin="anonymous"></script>
            </Helmet>
            <div className='relative flex flex-col min-h-screen'>
                <Header />
                <main className="grow flex flex-col items-center bg-slate-50">
                    {children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
}
