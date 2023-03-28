import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
    return (
        <Layout>
            <SEOHeader title="About" />

            <SiteBackground bgStyle={SiteBackgroundStyles.Words} />

            <div className='p-4 py-24 rounded-md text-slate-900 bg-fuchsia-100/90 flex flex-col w-full max-w-6xl z-20'>
                <StaticImage className='mb-8' src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." height={256} objectFit='contain' quality={100} />

                <div className='space-y-16'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>About This Website</h1>
                        <p>Liv and Zach</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Background Graphics</h1>
                        <p>In <span className='font-semibold'>😜 Silly Mode</span>, the background images you see were generated using <a href="https://en.wikipedia.org/wiki/Stable_Diffusion" target='_blank'><span className='underline'>Stable Diffusion</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>, an AI model used to create images from a text prompt. For example, the image below was generated using the text prompt "Utopia skyline, varied building heights, green parks, sunset, photorealistic":</p>
                        <StaticImage className='rounded-md w-full max-w-md' src="../content/backgroundImages/jpg/01377-3207551456-Utopia skyline, varied building heights, green parks, sunset, photorealistic.jpg" alt="Utopia skyline, varied building heights, green parks, sunset, photorealistic" />

                        <p>In <span className='font-semibold'>🤨 Serious Mode</span>, the faint background text you may notice is a copy of <a href="#" target='_blank'><span className='underline'>&lt;INSERT FTC THING HERE&gt;</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>.</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Contributing</h1>
                        <p className='!mt-2'>The source code for this website is available <a href="https://github.com/zfox23/iamagoodbing" target='_blank'><span className='underline'>on GitHub</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a> under the MIT license.</p>
                        <p>If you think of a silly or serious example of why AI isn't yet ready for public consumption, you can contribute your example in one of two ways:</p>
                        <ol className='list-decimal ml-8 !mt-2'>
                            <li>Submit <a href="https://github.com/zfox23/iamagoodbing/issues" target='_blank'><span className='underline'>a new GitHub issue</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>  with details about your example. Make sure your example hasn't already been submitted.</li>
                            <li>Modify <a href="https://github.com/zfox23/iamagoodbing/blob/main/website/src/content/content.json" target='_blank'><span className='underline'><code>content.json</code></span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a> directly, add your relevant image to the <a href="https://github.com/zfox23/iamagoodbing/tree/main/website/src/content/images" target='_blank'><span className='underline'><code>images</code></span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a> directory, and submit a pull request.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;