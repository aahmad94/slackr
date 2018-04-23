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

    #directmessages
    resources :directmessages, only: [:index, :create] do
      resources :messages, only: [:create, :index]
      resources :users, only: :index
    end

  end

  # channels
  post '/api/channels/add_subscriber/:id' => 'api/channels#add_subscriber',
    as: 'api_channel_add_subscriber',
    defaults: { format: :json }

  delete '/api/channels/remove_subscriber/:id' => 'api/channels#remove_subscriber',
    as: 'api_channel_remove_subscriber',
    defaults: { format: :json }

  get '/api/channels/search/:query' => 'api/channels#search',
    as: 'api_channel_search',
    defaults: { format: :json }

  # directmessages
  delete '/api/directmessages/leave/:id' => 'api/directmessages#leave',
    as: 'api_directmessage_leave',
    defaults: { format: :json }

  post '/api/directmessages/:directmessage_id/add/:id' => 'api/directmessages#add',
    as: 'api_directmessage_add',
    defaults: { format: :json }
    
  patch '/api/directmessages/update_last_read/:id' => 'api/directmessages#update_last_read',
    as: 'api_directmessage_update_last_read',
    defaults: { format: :json }

end
