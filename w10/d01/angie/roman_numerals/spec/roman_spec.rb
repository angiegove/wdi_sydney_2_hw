require_relative "./spec_helper.rb" # ./ represents current folder. We need the require to tie the dolders together
require_relative "../roman_numerals.rb"

describe Numeral do
  describe "#roman_to_numerals" do

    it "accepts a roman numeral and converts to number" do
    Numeral.roman_to_integer("V").should == 5
    # check that str is a roman numeral
    # take each char
    # build integer based on individual characters
    # display the integer
    end

    it "accepts a roman numeral and converts to number" do
    Numeral.roman_to_integer("V").should == 5
    # check that str is a roman numeral
    # take each char
    # build integer based on individual characters
    # display the integer
  end
end