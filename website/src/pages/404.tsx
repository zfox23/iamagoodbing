import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <Layout>
            <SEOHeader title="404" />

            <SiteBackground bgStyle={SiteBackgroundStyles.Images} />

            <div className="w-full h-full grow flex flex-col items-center justify-center text-slate-50 z-20">
                <div className='bg-fuchsia-900/95 py-8 px-16 rounded-md flex flex-col gap-8'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-6xl font-bold'>404</h1>
                        <h2>Page Not Found</h2>
                    </div>
                    <Link className='px-2 hover:underline text-3xl' to='/'>Return Home 😊</Link>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage;