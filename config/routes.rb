Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [:index, :create, :show, :update, :destroy]
  end

  root to: 'static_pages#root'
end
