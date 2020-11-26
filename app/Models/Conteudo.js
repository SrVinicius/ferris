'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Conteudo extends Model {
    imagens(){
        return this.belongsTo("App/Models/Imagens")
    }
    users(){
        return this.belongsTo("App/Models/Users")
    }
}

module.exports = Conteudo
