import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent({title,description,image,url,handleClick}){
    return (
        <Card className={"h-100 bg-dark text-white shadow-sm"}>
            <div style={{height: '220px'}}>
                <Card.Img variant="top" className="w-100 h-100" style={{objectFit:'cover'}} src={image ? image : "https://bit.ly/3NeUNDY"} />
            </div>
            <Card.Body>
                <Card.Title>{title ? title :"Card Title"}</Card.Title>
                <Card.Text>
                    {description ? description : `Some quick example text to build on the card title and make up the
                    bulk of the card's content.`}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button size={"sm"} onClick={handleClick} variant="danger">View Detail</Button>
            </Card.Footer>
        </Card>
    )
}