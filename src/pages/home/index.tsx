import React from 'react'
import {
    Jumbotron,
    Button
} from 'react-bootstrap'
import {
    Github
} from 'react-bootstrap-icons'

const Home = () => {
    return (
        <section>
            <Jumbotron>            
                <h1 className='display-4'>React Todolist</h1>
                <p className='lead'>This is a simplet Todolist project with react! </p>
                <hr className="my-4"/>
                <p>It's Working with <a href="https://github.com/AleejandroReyna/django-todolist" target='_blank'>django Todolist</a>!</p>
                <Button href="" variant="primary">
                    <Github /> Go to Github
                </Button>
            </Jumbotron>
        </section>
    )
}

export default Home