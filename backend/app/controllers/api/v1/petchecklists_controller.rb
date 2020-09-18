class Api::V1::PetchecklistsController < ApplicationController
  before_action :set_petchecklist, only: [:show, :update, :destroy]

  def index
    @petchecklists = Petchecklist.all
    render json: @petchecklists
  end

  private 

  def set_petchecklist
    @petchecklist = Petchecklist.find(params[:id])
  end

  def petchecklist_params
    params.require(:petchecklist).permit(:name, :done)
  end
end
