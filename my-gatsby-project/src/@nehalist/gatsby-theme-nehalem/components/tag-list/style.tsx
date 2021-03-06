import styled from "styled-components";
import Theme from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/styles/theme";
import {Link} from "gatsby";

export const TagContainer = styled.section`
  display:flex;
  padding: 20px 77px;
  border-top: 2px solid #234e45;
  border-bottom:0;
  text-align: center;
`;

export const TagListTitle = styled.h2`
  margin: 0;
  color:#234e45;
  font-size:17px;
`;

export const StyledTagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: ${Theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledTag = styled.li`
  margin: 0 25px;
  transition: .5s all;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: ${Theme.breakpoints.sm}) {
    width: 50%;
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TagIcon = styled.img`
  max-height: 55px;
`;

export const TagName = styled.span`
  display: block;
`;

export const TagArchiveLinkWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;

export const TagArchiveLink = styled(Link)`
  font-style: italic;
  font-size: .8em;
`;
