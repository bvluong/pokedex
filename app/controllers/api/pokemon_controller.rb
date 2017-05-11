class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def pokemon_params
    params
      .require(:pokemon)
      .permit(:attack, :defense, :image_url, :name, :poke_type, moves:[])
  end

end
