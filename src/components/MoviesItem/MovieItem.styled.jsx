import styled from 'styled-components';

export const Item = styled.li`
  width: 200px;
  overflow: hidden;
`;

export const Poster = styled.img`
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 15px;
`;
export const Title = styled.p`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
