Rails.application.routes.draw do
  devise_for :users
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  
  resources :articles do
  	resources :comments
  end
  resources :articles do
	resource :like, only: [:create, :destroy]
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
