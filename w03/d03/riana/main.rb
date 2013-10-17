require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'active_record'
require 'logger'

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :host => "localhost",
  :username => 'fuzzyri',
  :password => '',
  :database => "blogs",
  :pool => 20
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Post < ActiveRecord::Base
  attr_accessible :title, :category, :body, :image, :created_at

  def to_s
    "#{title} - #{category}"
  end
end

get '/pry' do
  binding.pry
end

before do
  #query the database for the result set, the results are returned in an array
  #the array will contain objects, instances of the Post class
  #the object attributes and methods can be invoked
  @latest_posts = Post.last(5)
end

#the home page handler
get '/' do
  #get the most recent posts and display them on the home page
  @latest_posts.reverse
  #get the latest post to display on the home page
  @current_post = @latest_posts[0]
  #open the home.erb page and display the latest post and links to the 5 most recent
  erb :home
end

get '/post/archive' do
  #get all historical posts in chronoligical order
  @all_posts = Post.all
  #open the archive.erb page and display the posts
  erb :archive
end

#adding a new post handler
get '/post/new' do
  #load the new/edit form to capture data
  erb :form
end

#saving data entered on the new /edit form
post '/post/new' do
  @new_post = Post.new
  @new_post.title = params['title']
  @new_post.category = params['category']
  @new_post.body = params['body']
  @new_post.image = params['image']
  @new_post.save
  redirect to "/post/#{@new_post.id}"
end

#reload the home page with the post id selected for any posts
get '/post/:post_id' do
  #query the DB for the details of the post id received in the request
  @current_post = Post.find(params[:post_id])
  #load form.erb and populate with the record data
  erb :home
end

#redirect user to the form page when they click edit on the home page or archive page
get '/post/:post_id/edit' do
  #get the select post for update
  @post = Post.find(params[:post_id])
  erb :form
end

#update an existing post information for the id received in the request
post '/post/:post_id' do
  @edit_post = Post.find(params[:post_id])
  @edit_post.title = params['title']
  @edit_post.category = params['category']
  @edit_post.body = params['body']
  @edit_post.image = params['image']
  @edit_post.save
  redirect to "/post/#{@edit_post.id}"
end

#destroy a post for the id received in the request
get '/post/:post_id/delete' do
  #get the received record to delete from the database
  @delete_post = Post.find(params[:post_id])
  #destory the record
  @delete_post.destroy
  #route user back to the archive page
  redirect to '/'
end
