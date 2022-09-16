import mongoose from "mongoose"

const rolSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
},
    {
        collection: 'roles',
        timestamps: false,
        versionKey: false
    }
)

const Rol = mongoose.model('Rol', rolSchema)

export default Rol