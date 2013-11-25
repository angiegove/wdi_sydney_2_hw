require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'json'


get '/' do
  # @movie = params[:title]

  #  url = "http://omdbapi.com/?t=#{@movie}"

  # @info = HTTParty.get url

  # @movie_info = JSON @info

  erb :form
end

get '/movie.json' do

  @movie = params[:title].gsub(" ", "+")

  url = "http://omdbapi.com/?t=#{@movie}"

  @info = JSON(HTTParty.get url)

  content_type :json
  @info.to_json

end
