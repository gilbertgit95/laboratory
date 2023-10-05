import { Schema, model, Document, Types } from '@kagiweb-tech/api-core-a/mongoose'
import { randomUUID } from 'crypto'

interface ITask {
    _id?: string,
    title?: string
    description?: string
}

const NoteSchema = new Schema<ITask>({
    _id: { type: String, default: () => randomUUID() },
    title: { type: String, required: false},
    description: { type: String, required: false },
}, { timestamps: true })

// create model
const TaskModel = model<ITask>('Task', NoteSchema)

export {
    ITask
}

export default TaskModel