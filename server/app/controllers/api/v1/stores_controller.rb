class Api::V1::StoresController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_store, only: [:show, :update, :destroy]
    before_action :authorize!, only: [:update, :destroy]
    
    def create
        store = Store.new store_params
        store.user = current_user

        if store.save
            render json: { 
                id: store.id 
            }
        else
            render(
                json: { 
                    errors: store.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def index
        stores = Store.order(name: :asc)
        render json: stores
    end

    def show
        render json: @store
    end
    
    def update
        if @store.update store_params
            render json: { 
                id: @store.id 
            }
        else
            render(
                json: { 
                    errors: store.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def destroy
        @store.destroy

        render(
            json: { 
                status: 200 
            }, 
            status: 200
        )
    end

    private

    def store_params
        params.require(:store).permit(
            :name,
            :email,
            :phone,
            :address,
            :city,
            :province,
            :country,
            :postal_code,
            :category
        )
    end

    def find_store
        @store = Store.find(params[:id])
    end

    def authorize!
        unless can?(:crud, @store)
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
