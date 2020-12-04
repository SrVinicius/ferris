'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Conteudo = use("App/Models/Conteudo")
/**
 * Resourceful controller for interacting with conteudos
 */
class ConteudoController {
  /**
   * Show a list of all conteudos.
   * GET conteudos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const gelol = await Conteudo.all()
    return gelol
  }
  /**
   * Create/save a new conteudo.
   * POST conteudos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dado = request.only(["idconteudo","titulo","desc","iduser","idIMG"])
    const gelol = await Conteudo.create(dado)
    return gelol
  }

  /**
   * Display a single conteudo.
   * GET conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const gelol = await Conteudo.findOrFail(params.id)
    return gelol
  }
  /**
   * Update conteudo details.
   * PUT or PATCH conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const gelol = await Conteudo.findOrFail(params.id)
    const {idconteudo,titulo,desc,iduser,idIMG} = request.only(["idconteudo","titulo","desc","iduser","idIMG"])
    gelol.idconteudo = idconteudo
    gelol.titulo=titulo
    gelol.desc=desc 
    gelol.iduser=iduser
    gelol.idIMG=idIMG
    await gelol.save()
    return gelol
  }

  /**
   * Delete a conteudo with id.
   * DELETE conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const gelol = await Conteudo.findOrFail(params.id)
    await gelol.delete()
  }
}

module.exports = ConteudoController
