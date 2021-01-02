Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
      resources :users, only: [:create, :update] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]

      resources :stores, except: [:new, :edit] do
        resources :items, except: [:new, :edit, :index] do
          resources :transactions, shallow: true, only: [:create]
        end
      end
    end
  end
end
