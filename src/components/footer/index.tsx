import {
    Container, Row, Col
} from 'react-bootstrap'
import {
    HeartFill
} from 'react-bootstrap-icons'
import './index.css'

const Footer = () => {
    return (
        <footer className="bg-light main-footer">
            <Container>
                <Row>
                    <Col className="text-center mt-3">
                        <p>Made with <HeartFill/> by {' '}
                        <a href="https://github.com/AleejandroReyna" rel="noreferrer" target="_blank">Alejandro Reyna</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
