import MyNav from "@/components/MyNav";
import Container from "react-bootstrap/Container";
import CardComponent from "@/components/CardComponent";
import {Col, Row} from "react-bootstrap";

 function News({posts}){

     const news = posts?.articles || []

     const handleClickUrl = (url) => {
         window.open(url)
     }

    return (
        <>
            <MyNav />
            <Container>
                <Row md={3} lg={4} className={"g-3"}>
                    {
                        news.length > 0 && news.map((item,index) => {
                            return (
                                <Col key={index}>
                                    <CardComponent
                                        title={item.title}
                                        image={item.urlToImage}
                                        description={item.description}
                                        handleClick={() => handleClickUrl(item.url)}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export async function getStaticProps(){
     const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
    const posts = await res.json()
    return {
         props: {
             posts,
         }
    }
}


export default News