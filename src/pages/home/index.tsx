import {
    Jumbotron,
    Button,
    Container, Row, Col
} from 'react-bootstrap'
import {
    Github,
    StarFill
} from 'react-bootstrap-icons'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section style={{marginTop: "-1.5rem"}}>
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
                            <p className="mb-4">Copy <code>.env.example</code> and rename to <code>.env</code></p>
                            <h4>Step 04:</h4>
                            <p className="mb-5">Give me a <StarFill /> on {' '} 
                                <a href="https://github.com/AleejandroReyna/react-todolist" target="_blank" rel="noreferrer" 
                                >Github <Github /></a>.</p>
                            <h3>With Docker Compose (Recommended method)</h3>
                            <hr className="my-4"/>
                            <h4>Step 05:</h4>
                            <p className="mb-4">Install <a href="https://docs.docker.com/engine/install/">Docker</a></p>
                            <h4>Final Step:</h4>
                            <p className="mb-5">That's all. Run <code>docker-compose up</code>.</p>
                            <h3>Manual Installation</h3>
                            <hr className="my-4"/>
                            <h4>Step 05:</h4>
                            <p className="mb-4">Install <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/">Node</a>.</p>
                            <h4>Step 06: (Optional)</h4>
                            <p className="mb-4">Install <a target="_blank" rel="noreferrer" href="https://yarnpkg.com/">Yarn</a>.</p>
                            <h4>Step 07:</h4>
                            <p className="mb-4">Install node modules with <code>yarn install</code> or <code>npm install</code>.</p> 
                            <h4>Final Step:</h4>
                            <p className="mb-5">That's all! Run the command <code>yarn start</code> or <code>npm start</code>.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home