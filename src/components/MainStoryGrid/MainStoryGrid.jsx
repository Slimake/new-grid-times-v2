import React from 'react';
import styled from 'styled-components';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <div></div>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  /* gap: 48px; */
  margin-bottom: 48px;

  & > *:not(:last-child) {
    padding-bottom: 48px;
  }

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    'main-story main-story secondary-stories'
    'advertisement advertisement advertisement'
    'opinion-stories opinion-stories opinion-stories'
    ;
    gap: 0 1px;
    background-color: ${COLORS.gray[300]};

    & > *:not(:last-child) {
    padding-bottom: 0;
    }
  }

  @media (${QUERIES.laptopAndUp}) {
    /* grid-template-columns: 477px 386px 273px; */
    grid-template-columns: 1.6fr 1.4fr 1fr;
    grid-template-areas: 
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement'
    ;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background-color: ${COLORS.gray[100]};

  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    padding-bottom: 48px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background-color: ${COLORS.gray[100]};

  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    padding-left: 16px;
  }

  @media (${QUERIES.laptopAndUp}) {
    border-left: revert;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a:not(:first-child) {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }

  @media (${QUERIES.tabletOnly}) {
    &:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));
      gap: 32px;
    }

    &:nth-child(2) a:not(:first-child) {
      border-top: revert;
      padding-top: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background-color: ${COLORS.gray[100]};

  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background-color: ${COLORS.gray[100]};

  @media (${QUERIES.tabletAndUp}) {
    & > *:last-child {
      margin-top: 48px;
      margin-bottom: 48px;
    }
  }

  @media (${QUERIES.laptopAndUp}) {
    & > *:last-child {
      margin-top: 16px;
      margin-bottom: 0;
      margin-left: 16px;
    }
  }
`;

export default MainStoryGrid;
