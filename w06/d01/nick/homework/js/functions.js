// Create a calculator in JavaScript.

// Requirements

// Prompt the user to enter an operator and two operands.
// Support the following operations: addition, subtraction, multiplication, and division.
// Output may appear in the console or in an alert.
// Bonus

// Support the modulus operator.
// Support the square root operator.
// Support more than two operands (hint: array)

var operand = prompt("Which operand are you using?");
  console.log(operand);

var num1 = prompt("What is your first number?");
  console.log(num1);

var num2 = prompt("What is your second number?");
  console.log(num2);

if (operand === '+') console.log( num1 + num2);
else if (operand === '-' ) console.log( num1 - num2);
else if (operand === '/' ) console.log( num1 / num2);
else console.log( num1 / num2);
  // } console.log( num1 * num2);

// CURRENCY CONVERTER

// Title: Currency Converter App
// Objectives:

// create and use variables
// create and use functions

// Find the exchange rate between dollars and pounds
// Store the exchange rate in a variable

var exchange_rate = 0.63;
// Converting dollars to pounds:
// Store a dollar amount into a variable.
var dollars = 200000;
// Convert it to pounds and output "$NN is £NN".

var conversionPounds =function(dollars, exchange_rate) {
  var rate = "$" + dollars + " is GBP " + (dollars * exchange_rate) + "";
  console.log(rate);
  }

// // Converting pounds to dollars:
conversionPounds(dollars, exchange_rate);

// // Now store a pound amount into a variable.
var pounds = 100000;
// // Convert it to dollar and output "£NN is $NN."
var conversionDollars =function(pounds, exchange_rate) {
  var rate = "GBP " + pounds + " is $ " + (pounds * ( 1 / exchange_rate) + "");
  console.log(rate);
  }

conversionDollars(pounds, exchange_rate);

// THIS FOR THAT

// It's the inspiration for this exercise. We're going to recreate a console version of this site. What does your startup do? Let's practice using arrays to find out!

var _this = ["Skynet","Digital Music Distribution","FitBit","Realtime Data","ManPacks","Landing Page","Conversion Funnel","Social Network","Airbnb","SnapChat","Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query","Node.js Server","KickStarter","Match.com","Adultfriendfinder","Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine","Distributed Social Network","Quadcopter","Daring Fireball","Content Distribution Network","Analytics Platform","OpenTable","LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace","Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0","Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];
var _that = ["Facebook Platform","Erlang Enthusiasts","Collegiate Jewish Women","Ex-Girlfriends","Binders Full of Women","Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists","Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","High-End Pornography","Sysadmins","Bath Salts","Nootropics","California","Gay Marriages","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics","Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes","Attractive People","Ugly People","Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Christian Families","Social Outcasts","Surgeons","Sorority Chicks","Pounding Jagger Bombs","Medicinal Marijuana","Textbooks","Coffee Shops","Baristas"];

// Write a function called randomThis() that picks a random "This" element from the array

var randomThis = function() {
  return(_this[Math.floor(Math.random() * _this.length)]);
};

// Write a function called randomThat() that picks a random "That" element from the array

var randomThat = function() {
  return(_that[Math.floor(Math.random() * _that.length)]);
};

// Write a function that prints a statement saying: "So.... your startup is basically like
// a like a this for that?" It should print a new statement each time the function is called.

var thisThat = function() {
  return "So... your startup is basically like a " + randomThis() + " for " + randomThat() + "?"
};

console.log(thisThat());