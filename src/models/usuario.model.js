import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    roles: {
        type: Array,
        required: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario