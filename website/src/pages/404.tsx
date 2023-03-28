import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { SiteBackground } from '../components/SiteBackground';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <Layout>
            <SEOHeader title="404" />

            <SiteBackground currentTabIndex={1} />

            <div className="w-full h-full grow flex flex-col gap-4 items-center justify-center text-slate-900 z-20">
                <div className='flex flex-col items-center'>
                    <h1 className='text-6xl font-bold'>404</h1>
                    <h2>Page Not Found</h2>
                </div>
                <Link className='px-2 hover:underline' to='/'>Return Home</Link>
            </div>
        </Layout>
    )
}

export default IndexPage;