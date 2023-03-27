import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { graphql } from 'gatsby';
import ContentCard from '../components/ContentCard';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEOHeader title="Home" />

            <div className='flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full mx-auto px-4 md:px-8 my-4'>
                {
                    data?.allContentJson.nodes.map((contentData) => (
                        <ContentCard
                            key={contentData.id}
                            cardData={contentData} />
                    ))
                }
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

