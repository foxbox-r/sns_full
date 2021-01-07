import React,{useState,useMemo} from 'react';
import Link from "next/link";
import {Menu,Input,Row,Col} from "antd"
import UserProfile from "../components/UserProfile"
import LogginForm from "../components/LoginForm"
import styled from "styled-components"
import {useSelector} from "react-redux";

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
`;

function AppLayout({children}){
    const {me} = useSelector((state)=>state.userReducer);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={4}>
                    {me?<UserProfile /> : <LogginForm />}
                </Col>
                <Col xs={24} md={16}> 
                    {children}
                </Col>
                <Col xs={24} md={4}>
                    <a href="" target="_blank">foxboxr</a>
                </Col>
            </Row>
        </div>
    )
}

export default AppLayout;