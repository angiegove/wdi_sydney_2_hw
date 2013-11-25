class HomeController < ApplicationController

  def index
    @countries = Country.select([:id, :abbreviation, :name, :north_america]);

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @countries }
    end
  end

  def countries
    @countries = Country.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @countries }
    end
  end

end
