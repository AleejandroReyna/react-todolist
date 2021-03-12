import {
    Container, Row, Col,
    Alert
} from 'react-bootstrap'
import { AlertsContext } from '../../contexts/alerts.context'
import { AlertContextProps } from '../../contexts/alert.interface'

const Alerts = ({alerts, addAlert, deleteAlert}:AlertContextProps) => {
    if(alerts.length > 0) {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {alerts.map((alert, idx) =>
                            <Alert key={idx} variant={alert.variant} onClose={() => deleteAlert(alert)} dismissible>
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