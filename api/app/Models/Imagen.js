'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Imagen extends Model {
    conteudo(){
        return this.belongsToMany('App/Models/Conteudo')
    }
}

module.exports = Imagen
