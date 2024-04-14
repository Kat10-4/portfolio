import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper>

                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: #fff;
    padding: 100px 0 0;`