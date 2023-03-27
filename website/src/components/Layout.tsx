import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Helmet htmlAttributes={{
                lang: 'en',
            }} />
            <div className='relative flex flex-col min-h-screen'>
                <Header />
                <main className="grow flex flex-col items-center bg-neutral-800">
                    {children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
}
