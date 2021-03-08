import React from 'react'
import { TaskPanelProps } from './interface'

const TaskPanel = ({type, label}: TaskPanelProps) => {
    return (
        <article>
            <h5>{label}</h5>
            <section className="bg-light border rounded rounded-3 p-2">
                tasks drag and drop panel
            </section>
        </article>
    )
}

export default TaskPanel