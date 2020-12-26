class CharactersController < ApplicationController
  def index
    @character = Character.all
    render json: @character
  end

  def create
    @character = Character.create(name: params[:name])
    render json: @character
  end

  def update
    @character = Character.find(params[:id])
    @character.update_attributes(name: params[:name])
    render json: @character
  end

  def destroy
    @character = Character.find(params[:id])
    if @character.destroy
      head :no_content, status: :ok
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end
end
