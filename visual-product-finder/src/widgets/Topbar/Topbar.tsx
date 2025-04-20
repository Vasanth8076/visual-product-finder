import React from 'react';
import { Container, Content } from './styles/topbar.styles.ts';
import SearchBar from '../../shared/ui/search-bar/SearchBar.tsx';
import UserAvatar from '../../shared/ui/user-avatar/UserAvatar.tsx';


export const TopBar = () => {
  

  return (
    <Container>
      <Content>
        <SearchBar />
        <UserAvatar/>
        
      </Content>
    </Container>
  );
};
