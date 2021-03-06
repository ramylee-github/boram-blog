import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";

interface LogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  margin-right: 45px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 15px;
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  height: 30px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    query {
      file( base: {eq: "logo_solb_b.png"}) {
        childImageSharp {
          fixed(width: 143, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HomeLink to={`/`}>
      <LogoImage fixed={logo.file.childImageSharp.fixed} alt={title} />
    </HomeLink>
  );
}
;

export default Logo;
