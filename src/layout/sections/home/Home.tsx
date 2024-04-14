import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from "..//..//../assets/images/photo.webp"


export const Home: React.FC = () => {
    return (
        <StyledHome>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <HomeTextBlock>
                        <span>Hello</span>
                        <Name>I’m Daniella Adams</Name>
                        <HomeText>
                            I’m a Graphics Designer,Design has become my everyday affair. masting styles,grids cant be
                            less interesting.
                        </HomeText>
                        <Button>Download CV</Button>
                    </HomeTextBlock>
                    <Photo src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledHome>
    );
};

const StyledHome = styled.section`
    min-height: 100vh;
    background-color: #fff;
    padding: 100px 0 0;
`

const HomeTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 481px;
    height: 313px;`

const Name = styled.h2``

const HomeText = styled.p``

const Photo = styled.img`
    border-radius: 20px;
    width: 432px;
    height: 540px;
    object-fit: cover;
    margin: 100px 0`