import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {No_Image} from "@/lib";

function MovieCard({image, title,overview}) {
    return (
        <Card className={"h-100"}>
            <div style={{height: '220px'}}>
                <Card.Img variant="top" className="w-100 h-100" style={{objectFit:'contain'}} src={image ? image : No_Image} />
            </div>
            <Card.Body>
                <Card.Title>{title ? title : "Default title"}</Card.Title>
                <Card.Text>
                    {overview ? overview.substring(0,100) + "..." : "Some quick example text to build on the card title and make up the bulk of the cards content."}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" size={"sm"}>View Detail</Button>
            </Card.Footer>
        </Card>
    );
}

export default MovieCard;