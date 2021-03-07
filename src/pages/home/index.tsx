import {
    Jumbotron,
    Button,
    Container, Row, Col
} from 'react-bootstrap'
import {
    Github,
    StarFill
} from 'react-bootstrap-icons'

const Home = () => {
    return (
        <>
            <section>
                <Jumbotron>            
                    <h1 className='display-4'>React Todolist</h1>
                    <p className='lead'>This is a simplet Todolist project with react! </p>
                    <hr className="my-4"/>
                    <p>It's Working with{' '}
                        <a 
                            href="https://github.com/AleejandroReyna/django-todolist" 
                            target='_blank' rel="noreferrer">django Todolist</a>!</p>
                    <Button href="https://github.com/AleejandroReyna/react-todolist" variant="primary"
                            target='_blank'>
                        <Github /> Go to Github
                    </Button>
                </Jumbotron>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div  className="text-center mb-5">
                                <h3>Get Started!</h3>
                                <small>Step by Step guide to run React Todolist</small>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Step 01:</h4>
                            <p className="mb-4">Download and run {' '}
                                <a href="https://github.com/AleejandroReyna/django-todolist" 
                                   rel="noreferrer" target="_blank">Django Todolist</a></p>
                            <h4>Step 02:</h4>
                            <p className="mb-4">Clone the repo {' '}
                                <a href="https://github.com/AleejandroReyna/react-todolist" 
                                   rel="noreferrer" target="_blank">here!</a> </p>
                            <h4>Step 03:</h4>
                            <p className="mb-4">Install the node modules with <code>yarn install</code> or <code>npm install</code>.</p>
                            <h4>Step 04:</h4>
                            <p className="mb-4">Set the enviroment variables.</p>
                            <h4>Step 05:</h4>
                            <p className="mb-4">Give me an <StarFill /> on {' '} 
                                <a href="https://github.com/AleejandroReyna/react-todolist" target="_blank" rel="noreferrer" 
                                >Github <Github /></a>.</p>
                            <h4>Step 06:</h4>
                            <p>that's it all! Run the command <code>yarn start</code> or <code>npm start</code>.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home