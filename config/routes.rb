Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:index, :create, :destroy, :show]
    resources :gatherings, except: [:new, :edit]
    resources :categories, except: [:new, :edit]
  end

  root "static_pages#root"
end
