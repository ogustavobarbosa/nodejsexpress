import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros
            .find()
            .populate('autores')
            .exec((err, livros)=>{
                res.status(200).json(livros)
            })
    }
    static burcarPorEditora = (req, res) => {
        const {editora} = req.query

        livros
            .find({'editora': { $regex: editora } }, {}, (err, livros) =>{
                if (err){
                    res.status(400).send({message: `Nennhum livro encontrado - ${err.message}`})
                }else{
                    res.status(200).json(livros)
                }
            })
    }
    static listarLivroPorID = (req, res)=>{
        const {id} = req.params
        livros
            .findById(id)
            .populate('autores', 'nome')
            .exec((err, livro)=>{
                if(err) {
                    res.status(400).send({message:`${err.message} - Id não encontrado`})
                }else{
                    res.status(200).json(livro)
                }
            })
    }
    static cadastrarLivro = (req, res)=>{
        let livro = new livros(req.body)

        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
    static atualizarLivro = (req, res)=>{
        const {id} = req.params
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Erro ao atualizar Livro ${id}`})
            }else{
                res.status(200).send({message: `Livro ${id} atulizado com sucesso`})
            }
        })
    }
    static deletarLivro = (req, res) =>{
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) =>{
            if(err) {
                res.status(500).send({message: `${err.message} - Falha deletar o livro id=${id}`})
            }
            else{
                res.status(200).send({message: `Livro ${id} deletado com sucesso!`})
            }
        })
    }
}

export default LivrosController;
