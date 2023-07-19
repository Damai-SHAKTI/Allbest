import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Navbar, Link, Text } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { IoSearchCircleSharp } from "react-icons/io5";

import Search from "../Search";

interface Props {
    children: React.ReactNode,
}

const MyNavbar: React.FC<Props> = ({ children }) => {

    const { pathname } = useRouter()
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const collapseItems = [
        { page: "Home", slug: "/" },
        { page: "About me", slug: "/aboutme" },
    ];

    useEffect(() => {
        setTheme('dark')
    })

    return (
        <>
            <Search isOpen={isOpen} setIsOpen={setIsOpen} />
            
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle aria-label="toggle navbar collapse button" showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <NextLink href="/" style={{ flex: "none" }}>
                        <Image
                            width={40}
                            height={40}
                            src="/logo.png"
                            alt="Logo"
                            style={{ width: "40px", height: "40px", borderRadius: "999px" }}
                        />
                    </NextLink>

                    <NextLink href="/">
                        <Text b color="#fff" hideIn="xs">
                            ALLBEST
                        </Text>
                    </NextLink>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"
                >
                    <Navbar.Link isActive={pathname == "/" ? true : false} href="/">Home</Navbar.Link>
                    <Navbar.Link isActive={pathname == "/aboutme" ? true : false} href="/aboutme">About me</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <IoSearchCircleSharp 
                        size={40} 
                        color="#fff" 
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: "pointer" }} 
                    />
                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={index}
                            activeColor="secondary"
                            isActive={pathname == item.slug ? true : false}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={item.slug}
                            >
                                {item.page}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
            <div style={{ padding: '20px' }}>
                {children}
            </div>
        </>
    );
}

export default MyNavbar;
