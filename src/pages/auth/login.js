import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from "next/link";
export default function login() {
    return (
        <div className={"login-form"}>
            <h1 className={"text-center text-uppercase"}>Login</h1>
            <Form action="/">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        Well never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-warning">
                        <Link href="/" className="d-inline-block"><i className="bi bi-arrow-return-left"></i> Back to Home</Link>
                    </small>
                    <Button variant="success" type="submit">
                        <i className="bi bi-check-all"></i> Login
                    </Button>
                </div>
            </Form>
        </div>
    )
}

login.getLayout = function getLayout({children}){
    return (
        <>
            <main className={"pt-4"}>
                {children}
            </main>
        </>
    )
}
