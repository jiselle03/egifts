class Api::V1::TransactionsController < ApplicationController
    before_action :authenticate_user!
    before_action :find_item, only: [:create]
    before_action :authorize!, only: [:create]

    def create
        transaction = Transaction.new(user: current_user, item: @item)

        if transaction.save
            render json: { 
                id: transaction.id 
            }
        else
            render(
                json: { 
                    errors: transaction.errors 
                },
                status: 422 #Unprocessable Entity
            )
        end
    end

    private

    def find_item
        @item = Item.find params[:item_id]
    end

    def authorize!
        unless can? :purchase, @item
            render(
                json: { 
                    status: 401 
                },
                status: 401 #Not Authorized
            )
        end
    end
end
