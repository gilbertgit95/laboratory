import { Schema, model, Document, Types } from '@kagiweb-tech/api-core-a/mongoose'
import { randomUUID } from 'crypto'

interface INote {
    _id?: string,
    title?: string
    description?: string
}

const NoteSchema = new Schema<INote>({
    _id: { type: String, default: () => randomUUID() },
    title: { type: String, required: false},
    description: { type: String, required: false },
}, { timestamps: true })

// create model
const NoteModel = model<INote>('Note', NoteSchema)

export {
    INote
}

export default NoteModel