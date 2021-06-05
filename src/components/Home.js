import React from 'react';
// import styled from 'styled-components';
import { GrAdd } from 'react-icons/gr';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import {
    PageContainer,
    Greeting,
    PageTitleWrapper,
    PageTitle,
    NewProjectWrapper,
    StyledH5,
    StatusCardWrapper,
    WorkingOnIt,
    Done,
    StatusTitle,
    StatusCardContent,
    CardTile,
    CardTitle,
    CardActionWrapper
} from './PageStyling';

const Home = () => {
    return (
        <PageContainer>
            <Greeting>Welcome to Ticket Punch, Guest</Greeting>
            <PageTitleWrapper>
                <PageTitle>Your projects</PageTitle>
                <NewProjectWrapper>
                    <StyledH5>Add Project</StyledH5>
                    <GrAdd />
                </NewProjectWrapper>
            </PageTitleWrapper>
            <StatusCardWrapper>
                    <WorkingOnIt>
                        <StatusCardContent>
                            <StatusTitle>Working on it / 1</StatusTitle>
                            <CardTile>
                                <CardTitle>Ticket Punch</CardTitle>
                                <CardActionWrapper>
                                    <BsFillTrashFill />
                                    <MdEdit />
                                </CardActionWrapper>
                            </CardTile>
                        </StatusCardContent>
                    </WorkingOnIt>
                    <Done>
                        <StatusCardContent>
                            <StatusTitle>Done / 1 </StatusTitle>
                            <CardTile>
                                <CardTitle>Family Promise</CardTitle>
                            </CardTile>
                        </StatusCardContent>
                    </Done>
                </StatusCardWrapper>
        </PageContainer>
    );
};

export default Home;

// STYLED COMPONENTS BELOW:

