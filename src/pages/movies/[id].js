import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {API_KEY, BASE_URL, IMAGE_BASE_PATH} from "@/lib";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WatchTrailer from "@/components/WatchTrailer";

export default function Movie(){
    const router = useRouter()
    const movieId = router.query.id
    const [movie,setMovie] = useState()
    const [videos,setVideos] = useState()
    const [loadVideo, setLoadVideo] = useState(false)

    useEffect(()=>{
        fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))
        fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setVideos(data)
                setLoadVideo(true)
            })
    },[])

    console.log(videos)

    return (
        <Container>
            <Row>
                <Col md={4} lg={3}>
                    <Card.Img className="img-thumbnail" variant="top" src={IMAGE_BASE_PATH + movie?.backdrop_path} />
                </Col>
                <Col md={8} lg={9}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{movie?.title}</Card.Title>
                            <Card.Text>
                                <p>Overview</p>
                                {movie?.overview}
                            </Card.Text>

                            <WatchTrailer
                                embedKey={loadVideo ? videos.results[videos.results.length-1] : "J1PlHGTa2_o"}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}