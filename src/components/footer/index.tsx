import {
    Container, Row, Col
} from 'react-bootstrap'
import {
    HeartFill
} from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <footer className="mt-5 bg-light">
            <Container>
                <Row>
                    <Col className="text-center mt-3">
                        <p>Made with <HeartFill/> by 
                        <a href="https://github.com/AleejandroReyna" rel="noreferrer" target="_blank">Alejandro Reyna</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
