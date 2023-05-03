import { Inter } from 'next/font/google'
import Container from "react-bootstrap/Container";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Container className="p-home">
                <h1 className="text-center text-uppercase">
                    Welcome to <br/>
                    <span className="text-danger change-color" style={{fontSize: "4.5rem"}}>
                        BEGOINGTO <i className="bi bi-badge-8k"></i>
                    </span> <br/>
                    NEXTJS EXERCISES
                </h1>
            </Container>
        </>
    )
}
