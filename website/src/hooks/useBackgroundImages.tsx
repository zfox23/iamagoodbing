import { useStaticQuery, graphql } from "gatsby"

export const useBackgroundImages = () => {
    const data = useStaticQuery(
        graphql`
        query SiteBackgroundQuery {
            allBackgroundImagesJson {
                nodes {
                    id
                    src {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 93)
                        }
                    }
                    alt
                }
            }
        }
    `
    )
    return data.allBackgroundImagesJson.nodes;
}
