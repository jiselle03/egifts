class Api::V1::ItemsController < ApplicationController
    before_action :authenticate_user!, except: [:show]
    before_action :find_item, only: [:show, :update, :destroy]
    before_action :authorize!, only: [:create, :update, :destroy]

    def create
        store = Store.find params[:store_id]
        item = Item.new item_params
        item.user = current_user
        item.store = store

        if item.save
            render json: { 
                id: item.id 
            }
        else
            render(
                json: { 
                    errors: item.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def show
        render json: @item
    end
    
    def update
        if @item.update item_params
            render json: { 
                id: @item.id 
            }
        else
            render(
                json: { 
                    errors: item.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def destroy
        @item.destroy

        render(
            json: { 
                status: 200 
            }, 
            status: 200
        )
    end

    private

    def item_params
        params.require(:item).permit(
            :name,
            :price,
            :availability,
            :description,
            :customization,
            :category
        )
    end

    def find_item
        @item = Item.find params[:id]
    end

    def authorize!
        unless can?(:crud, @item)
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
