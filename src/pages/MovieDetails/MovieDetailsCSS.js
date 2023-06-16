import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const GoBackLink = styled(Link)`
  border: 1px solid #9e9e9e63;
  border-radius: 6px;
  padding-right: 2px;
  padding-left: 2px;
  text-decoration: none;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const Movie = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
`;
export const Genres = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
`;
export const GenresLi = styled.li`
  margin-right: 10px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const InfoBox = styled.div`
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
  padding: 10px;
`;
