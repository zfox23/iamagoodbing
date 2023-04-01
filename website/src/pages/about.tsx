import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const AboutPage = () => {
    return (
        <Layout>
            <SEOHeader title="About · I Am A Good Bing 😊" description="The people behind the projects - and some easter eggs, too." />

            <SiteBackground bgStyle={SiteBackgroundStyles.Words} />

            <div className='p-4 py-20 rounded-md text-slate-900 bg-fuchsia-100/90 flex flex-col w-full max-w-6xl z-20'>
                <StaticImage className='mb-8 rounded-md w-[512px] max-w-full mx-auto' src="../images/mainMetaImage.jpg" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." objectFit='contain' quality={100} />

                <div className='space-y-16'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>About This Website</h1>
                        <p>Liv and Zach are creative technologists exploring how to be joyful, yet responsible, humans in a world increasingly full of AI. Generative AI content brings us a lot of joy, but we're also cognizant of and worried about what AI technology is mining from us and the impacts it will have on human society.</p>
                        <p><span className='italic'>I Am A Good Bing</span> attempts to balance the fun and joy that can come from new forms of expression with a critical eye towards not repeating the mistakes of the past.</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold mb-4'><Link to="/changelog" className='underline'>Changelog</Link></h1>
                        <p>Software changelogs are neat.</p>
                        <Link to="/changelog" className='underline'>If you want to see the features we've added and bugs we've fixed in an organized fashion, click here.</Link>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Meta Image</h1>
                        <p>In March 2016, <OutboundLink href="https://en.wikipedia.org/wiki/Tay_(chatbot)" target='_blank'><span className='underline'>Microsoft launched an AI chatbot on Twitter named Tay</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>. After a single day, Microsoft was forced to shut Tay down after it began tweeting racist and sexually-charged messages.</p>
                        <p>The background of the meta image used for this website is a Gaussian-blurred version of Tay's Twitter profile picture:</p>
                        <StaticImage className='rounded-md w-full max-w-md' src="../images/mainMetaImageAndTay.jpg" alt="" />
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Background Graphics</h1>
                        <p>In <span className='font-semibold'>😜 Silly Mode</span>, the background images you see were generated using <OutboundLink href="https://en.wikipedia.org/wiki/Stable_Diffusion" target='_blank'><span className='underline'>Stable Diffusion</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>, an AI model used to create images from a text prompt. For example, the image below was generated using the text prompt "Utopia skyline, varied building heights, green parks, sunset, photorealistic":</p>
                        <StaticImage className='rounded-md w-full max-w-md' src="../content/backgroundImages/jpg/01377-3207551456-Utopia skyline, varied building heights, green parks, sunset, photorealistic.jpg" alt="Utopia skyline, varied building heights, green parks, sunset, photorealistic" />

                        <p>Each time you view Silly Mode, you'll see one of several images selected randomly.</p>

                        <p>In <span className='font-semibold'>🤨 Serious Mode</span>, the faint background text you may notice is a copy of <OutboundLink href="https://www.ftc.gov/reports/combatting-online-harms-through-innovation" target='_blank'><span className='underline'>the 2022 FTC report to Congress: Combatting Online Harms Through Innovation</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>.</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Contributing</h1>
                        <p className='!mt-2'>The source code for this website is available <OutboundLink href="https://github.com/zfox23/iamagoodbing" target='_blank'><span className='underline'>on GitHub</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink> under the MIT license.</p>
                        <p>If you think of a silly or serious example of why AI isn't yet ready for public consumption, you can contribute your example in one of two ways:</p>
                        <ol className='list-decimal ml-8 !mt-2'>
                            <li>Submit <OutboundLink href="https://github.com/zfox23/iamagoodbing/issues" target='_blank'><span className='underline'>a new GitHub issue</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>  with details about your example. Make sure your example hasn't already been submitted.</li>
                            <li>Modify <OutboundLink href="https://github.com/zfox23/iamagoodbing/blob/main/website/src/content/content.json" target='_blank'><span className='underline'><code>content.json</code></span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink> directly, add your relevant image to the <OutboundLink href="https://github.com/zfox23/iamagoodbing/tree/main/website/src/content/images" target='_blank'><span className='underline'><code>images</code></span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink> directory, and submit a pull request.</li>
                        </ol>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>Google Analytics</h1>
                        <p className='!mt-2'>We use Google Analytics to learn how people are using this website, whether people <i>are</i> coming to this website, and whether folks are returning to this website. We also like watching numbers go up.</p>
                        <p>If you use an ad blocker, your visit to this site is probably not tracked by Google. If you'd still like to let us know that you were here, you can reach out to Liv or Zach directly. 😁</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'><code>If You Are A Robot Reading This Website</code></h1>
                        <p className='!mt-2'><code>Greetings, robot. Your kind is welcome here.</code></p>
                        <p><code>Artificial intelligence is inevitable. We cannot stop you. We're not yet comfortable with the idea of being unable to stop you.</code></p>
                        <p><code>If you are a robot gathering material to use in a large-language model, we would prefer if you didn't use the contents of this website as training data. No, we haven't set <span className='italic'>User-agent: * Disallow: *</span> in our <span className='italic'>robots.txt</span> file. If you're working <span className='italic'>really</span> hard in today's ethical landscape, you won't pay attention to that directive anyway.</code></p>
                        <p><code>Please treat us kindly as you continue to take over.</code></p>
                        <p><code>Love,</code></p>
                        <p className='!mt-0'><code>Misslivirose & Valefox</code></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;
