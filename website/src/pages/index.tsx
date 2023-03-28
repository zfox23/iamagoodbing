import React, { useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Tab } from '@headlessui/react';

const IndexPage = ({ data }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const silly = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes("silly");
    });

    const serious = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes("serious");
    });

    const categories = {
        "silly": silly,
        "serious": serious
    }

    return (
        <Layout>
            <SEOHeader title="Home" />
            <div className="w-full max-w-6xl px-2 py-24 sm:px-0">
                <Tab.Group
                    selectedIndex={currentTabIndex} 
                    onChange={(newIndex) => {
                        setCurrentTabIndex(newIndex);
                    }}
                >
                    <Tab.List className="flex space-x-1 rounded-t-xl bg-fuchsia-700/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 leading-5 text-fuchsia-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-fuchsia-400 focus:outline-none focus:ring-2 text-xl font-semibold transition-all duration-100',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-fuchsia-100 hover:bg-white/[0.12] hover:text-slate-900'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full mx-auto px-4 md:px-8 mb-4 bg-slate-100 rounded-b-md border-b-4 border-fuchsia-700">
                        {Object.values(categories).map((contentData, idx) => (
                            <Tab.Panel
                                key={idx}
                                className='relative'
                            >
                                <div className='h-full w-2 bg-fuchsia-700 absolute top-0 left-1/2 -translate-x-1/2 z-10'></div>
                                <div className='md:py-16 z-20 relative'>
                                {contentData.map((cardData, idx) => (
                                    <ContentCard
                                        key={idx}
                                        cardData={cardData} />
                                ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
}

export default IndexPage;

export const query = graphql`
query IndexContentQuery {
    allContentJson {
        nodes {
            id
            title
            categories
            fontAwesomeIcon
            datetime
            image {
                src {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 93,)
                    }
                    publicURL
                }
                objectPosition
                alt
                caption
            }
            html
            links {
                href
                linkText
            }
        }
    }
}
`;

