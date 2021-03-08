import React from 'react'
import { TaskPanelProps } from './interface'

const TaskPanel = ({type, label}: TaskPanelProps) => {
    return (
        <article>
            <h5>{label}</h5>
        </article>
    )
}

export default TaskPanel