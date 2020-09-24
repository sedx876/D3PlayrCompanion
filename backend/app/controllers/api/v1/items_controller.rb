class Api::V1::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  
  def index
      if logged_in?
      @tems = current_user.items
      render json: ItemSerializer.new(@items)
      else
        render json: {
          error: "You must be logged in to see your items"
        }
      end
  end

  
  def show
    render json: @item
  end

  def create
    @item = current_user.items.build(item_params)
    if @item.save
      render json:  ItemSerializer.new(@item), status: :created
    else
      error_resp = {
        error: @item.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json:  ItemSerializer.new(@item), status: :ok
    else
      error_resp = {
        error: @item.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  def destroy
    if @item.destroy
      render json:  { data: "Item successfully destroyed" }, status: :ok
    else
      error_resp = {
        error: "Item not found and not destroyed"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @character = Item.find(params[:id])
    end

    def character_params
      params.require(:item).permit(:name, :notes)
    end
    
end
