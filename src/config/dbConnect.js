import mongoose from "mongoose";

mongoose.connect('mongodb+srv://gustavo:123@alura.iyjdvcu.mongodb.net/alura')

let db = mongoose.connection;

export default db ;




