import {
    Container, Row, Col,
    Alert
} from 'react-bootstrap'
import { AlertContextProps } from '../../contexts/alert.interface'

const Alerts = ({alerts, deleteAlert}:AlertContextProps) => {
    if(alerts.length > 0) {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {alerts.map((alert, idx) =>
                            <Alert 
                                key={idx} 
                                variant={alert.variant} 
                                onClose={() => deleteAlert ? deleteAlert(idx) : null} 
                                dismissible
                                >
                                {alert.content}
                            </Alert>
                        )}    
                    </Col>
                </Row>
            </Container>
        )
    }

    return null
}

export default Alerts