import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Divider } from '../components/Divider';
import { useBackgroundImages } from '../hooks/useBackgroundImages';

const ChangelogPage = () => {
    const backgroundImages = useBackgroundImages();
    const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));

    return (
        <Layout>
            <SEOHeader title="Release Notes · I Am A Good Bing 😊" description="Software changelogs are neat. Here's our release notes." />

            <SiteBackground backgroundImageIdx={newBGImageIdx} bgStyle={SiteBackgroundStyles.Images} />

            <Breadcrumbs
                data={[{ title: "Home", url: "/" }, { title: "About", url: "/about" }, { title: "Changelog", url: "/changelog" }]}
            />

            <div className='p-4 pb-20 pt-4 my-16 rounded-md text-slate-900 bg-fuchsia-100/90 dark:bg-slate-100/90 flex flex-col w-full max-w-4xl z-20 border-b-4 border-fuchsia-900/95 dark:border-slate-900/95 shadow-md shadow-slate-900/20'>
                <div className='space-y-16'>
                    <div className='space-y-4'>
                        <div className='bg-slate-50/70 rounded-md border-b-4 border-fuchsia-600/95'>
                            <h3 className='w-full bg-fuchsia-700/95 dark:bg-slate-700/95 rounded-t-md text-slate-50 px-4 py-2 font-semibold'>What's this?</h3>
                            <div className='p-4'>
                                <p>This website changes often, sometimes multiple times per day. Here's a non-exhaustive list of all of those changes, with the most recent modifications first.</p>
                                <p className='mt-4'>Love you! 🥰</p>
                                <p>Zach</p>
                            </div>
                        </div>
                        <h2 className='font-semibold text-2xl !mt-8'>Changelog</h2>
                        <div className='space-y-8'>
                            <div>
                                <h3 className='font-semibold text-lg'>(2023-03-31) Unread Stories Indicator </h3>
                                <ul className='list-disc ml-4 !mt-2'>
                                    <li>
                                        <p>You'll now see a red "unread" badge on stories you haven't yet seen. You can click on that button to mark the story as read/unread:</p>
                                        <StaticImage quality={92} className='mt-2 mb-4' src="../images/changelog/unread-notification-button.png" alt="The unread notification button on each post." />
                                    </li>
                                    <li>
                                        <p>You'll see a notification at the top of the homepage which will link you to your latest unread story.</p>
                                        <StaticImage quality={92} className='mt-2 mb-4' src="../images/changelog/unread-notification-top.png" alt="The unread notification at the top of the homepage." />
                                    </li>
                                    <li>
                                        <p>The homepage's title changes depending on how many stories are marked unread.</p>
                                        <StaticImage quality={92} className='mt-2 mb-4' src="../images/changelog/unread-notification-title.png" alt="The unread notification in the browser's title bar. It says '1'." />
                                    </li>
                                    <li>Your "read" statuses associated with each story is stored locally on your device. That data is never transmitted over the wire.</li>
                                    <li>If you've been here a while, and you've already read everything, it'll be a fun game to mark all the stories as read!</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-semibold text-lg'>(2023-03-31) UI Tweaks </h3>
                                <ul className='list-disc ml-4 !mt-2'>
                                    <li>Tweaked the colors of the "Serious" theme.</li>
                                    <li>Added bottom borders to various divs cuz it looks great.</li>
                                    <li>Tightened up the graphics on Level 3.</li>
                                </ul>
                            </div>

                            <Divider className='!mt-16' />

                            <p className='font-semibold !mt-[5000px]'>...a TON of changes that I'm too lazy to write here...</p>
                            <p className='!mt-[5000px]'><span className='font-semibold'>2023-03-29:</span> We launched the site! 🎉</p>
                            <p className=''><span className='font-semibold'>2023-03-26:</span> We purchased the <Link to="/">iamagoodbing.ai</Link> and <Link to="/">iamagoodbing.com</Link> domain names</p>
                            <p className=''><span className='font-semibold'>2023-03-25:</span> Our friend showed us the <Link to="/goodbing">"I have been a good Bing! 😊</Link> chat log!</p>
                        </div>
                    </div>
                </div>
                <Divider className='mt-24' />
                <div className='mt-24 max-w-sm mx-auto'>
                    <StaticImage className='rounded-t-md' src="../images/2021-04-19 14-19-56 Blue.jpg" alt="An easter egg! A photo of Liv and Zach from mid-2021." />
                    <div className='bg-neutral-200 w-full p-2 rounded-b-md italic text-sm text-slate-900 text-center'>
                        <p>You found Mosby! <OutboundLink href="https://www.youtube.com/watch?v=bz85eQZ9Tp8" target="_blank" className='underline'>Congratulations. Was it worth it?</OutboundLink></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ChangelogPage;
