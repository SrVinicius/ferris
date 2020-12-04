'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Imagen = use("App/Models/Imagen")
/**
 * Resourceful controller for interacting with imagens
 */
class ImagenController {
  /**
   * Show a list of all imagens.
   * GET imagens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const camaro = await Imagen.all()
    return camaro
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
    const dado = request.only(["idIMG","caminhoIMG"])
    const camaro = await Imagen.create(dado)
    return camaro
  }
  /**
   * Display a single imagen.
   * GET imagens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const camaro = await Imagen.findOrFail(params.id)
    return camaro
  }
}

module.exports = ImagenController
