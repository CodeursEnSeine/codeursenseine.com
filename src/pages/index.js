import React, { useEffect } from "react";
import { useStaticQuery, graphql, withPrefix } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteCurrentYearQuery {
      site {
        siteMetadata {
          currentYear
        }
      }
    }
  `);

  useEffect(() => {
    window.location.href = withPrefix(`/${data.site.siteMetadata.currentYear}`);
  }, [data.site.siteMetadata.currentYear]);

  return <React.Fragment />;
};

export default IndexPage;
