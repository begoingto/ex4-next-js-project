import { Inter } from 'next/font/google'
import MyNav from "@/components/MyNav";
import Container from "react-bootstrap/Container";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <MyNav/>
            <Container>
                Home Page
            </Container>
        </>
    )
}
