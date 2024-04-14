import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

const items = ["Home", "About", "Latest Works", "Testimonials", "Contact"]

export const Header:React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo as='a' href={"#"}>Damadams</Logo>
                    <HeaderMenu>
                        <MenuList>
                            {items.map((item, index) => {
                                return <MenuItem key={index}>
                                    <ItemLink href={''}>{item}</ItemLink>
                                </MenuItem>
                            })}
                        </MenuList>
                    </HeaderMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: #fb3f5c;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 22px 128px;
`

const Logo = styled.h2`
    text-decoration: none;
    color: #f8eeef;
    text-transform: uppercase;
`
const HeaderMenu = styled.nav`
`

const MenuList = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
`

const MenuItem = styled.li`
`

const ItemLink = styled.a`
    text-decoration: none;
    color: #f8eeef;
`