import Placeholder from "react-bootstrap/Placeholder";
export default function BodyLoading(){
    return (
        <tr role="row">
            <Placeholder as="td" className="align-middle" animation="glow">
                <Placeholder xs={12}  size="lg"  bg="white" />
            </Placeholder>
            <Placeholder as="td" className="align-middle" animation="glow">
                <Placeholder xs={12}  size="lg"  bg="white" />
            </Placeholder>
            <Placeholder as="td" className="align-middle" animation="glow">
                <Placeholder xs={12}  size="lg"  bg="white" />
            </Placeholder>
            <Placeholder as="td" className="align-middle" animation="glow">
                <Placeholder
                    className="img-thumbnail p-img"
                    xs={12}
                    bg="white" />
            </Placeholder>
            <Placeholder as="td" className="align-middle" animation="glow">
                <Placeholder.Button className="btn-sm border-0" xs={4}  bg="primary" /> {' '}
                <Placeholder.Button className="btn-sm border-0" xs={4}  bg="danger" />
            </Placeholder>
        </tr>
    )
}