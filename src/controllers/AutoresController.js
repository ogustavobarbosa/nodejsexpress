import autores from "../models/Autor.js";

class AutorsController {

    static listarAutores = (req, res) => {
        autores.find((err, autores)=>{
            res.status(200).json(autores)
        })
    }

    static listarAutorPorID = (req, res)=>{
        const {id} = req.params
        autores.findById(id, (err, autor)=>{
            if(err) {
                res.status(400).send({message:`${err.message} - Id não encontrado`})
            }else{
                res.status(200).json(autor)
            }
        })
    }
    static cadastrarAutor = (req, res)=>{
        let autor = new autores(req.body)

        autor.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }
    static atualizarAutor = (req, res)=>{
        const {id} = req.params
        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao atualizar Autor ${id}`})
            }else{
                res.status(200).send({message: `Autor ${id} atulizado com sucesso`})
            }
        })
    }
    static deletarAutor = (req, res) =>{
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) =>{
            if(err) {
                res.status(500).send({message: `${err.message} - Falha deletar o autor id=${id}`})
            }
            else{
                res.status(200).send({message: `Autor ${id} deletado com sucesso!`})
            }
        })
    }
}

export default AutorsController;
