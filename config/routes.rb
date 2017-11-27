Rails.application.routes.draw do

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    # auth
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    #channels
    resources :channels, except: [:new, :edit] do
      resources :messages, only: [:create, :index]
      resources :users, only: :index
    end
  end

  #channels
  post '/api/channels/add_subscriber/:id' => 'api/channels#add_subscriber',
    as: 'api_channel_add_subscriber',
    defaults: { format: :json }

  delete '/api/channels/remove_subscriber/:id' => 'api/channels#remove_subscriber',
    as: 'api_channel_remove_subscriber',
    defaults: { format: :json }

end
