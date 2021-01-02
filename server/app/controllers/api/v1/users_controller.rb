class Api::V1::UsersController < ApplicationController
    before_action :authenticate_user!, except: [:create]
    before_action :find_user, only: [:update, :update_password]
    before_action :authorize!, only: [:update]

    def current
        render json: current_user
    end

    def create
        user = User.new user_params
        if user.save
            session[:user_id] = user.id
            render json: {
                id: user.id
            }
        else
            render(
                json: { 
                    errors: user.errors.full_messages 
                }, 
                status: 422
            )
        end
    end

    def update
        if @user.update user_params
            render json: { 
                id: @user.id 
            }
        else
            render(
                json: { 
                    errors: @user.errors 
                },
                status: 422
            )
        end
    end

    def update_password
        if @user&.authenticate params[:user][:current_password]
            new_password = params[:user][:new_password]
            new_password_confirmation = params[:user][:new_password_confirmation]
            new_password_different = new_password != params[:user][:current_password]
            password_confirmed = new_password == new_password_confirmation

            if new_password_different && password_confirmed
                if @user.update password: new_password, password_confirmation: new_password_confirmation
                    render json: { 
                        id: @user.id,
                        message: "Your password has been successfully updated."
                    }
                else 
                    render json: { 
                        message: "Password update failed. Please try again."
                    },
                    status: 422
                end
            else
                render json: { 
                    message: "Your password and password confirmation must match." 
                },
                status: 422
            end
        else
            render json: {
                message: "Your current password does not match our records."
            },
            status: 422
        end
    end

    private

    def find_user
        @user = User.find params[:id]
    end

    def user_params
        params.require(:user).permit(
            :first_name, 
            :last_name,
            :email,
            :phone_number,
            :password,
            :password_confirmation
        )
    end

    def authorize!
        unless can?(:crud, @user)
            render(
                json: { 
                    status: 401 
                },
                status: 401
            )
        end
    end
end
