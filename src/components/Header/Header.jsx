import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainActionGroup>
        <Logo />
        <Subscribe>
          <PaddedButton>SUBSCRIBE</PaddedButton>
          <a>Already a subscriber?</a>
        </Subscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) {
    & {
      justify-content: space-between;
      margin-top: 16px;
      min-height: calc(98 / 16 * 1rem);
    }
  }
`;

const MainActionGroup = styled(ActionGroup)`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    gap: 24px;
  }
`;

const Subscribe = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 6px;
    color: black;
  }
`;

const PaddedButton = styled(Button)`
  padding-top: 10px;
  padding-bottom: 6px;
`;

export default Header;
