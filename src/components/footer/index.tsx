import {
    Container, Row, Col
} from 'react-bootstrap'
import {
    HeartFill
} from 'react-bootstrap-icons'
import './index.css'
import { VERSION } from '../../version'

const Footer = () => {
    return (
        <footer className="bg-light main-footer">
            <Container>
                <Row className="mt-3">
                    <Col className="text-center" xs={{span: 8, offset: 2}}>
                        <p>Made with <HeartFill/> by {' '}
                        <a href="https://github.com/AleejandroReyna" rel="noreferrer" target="_blank">Alejandro Reyna</a></p>
                    </Col>
                    <Col className="text-right"><span>{ VERSION }</span></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
