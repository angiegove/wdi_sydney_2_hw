ARGF.each do |line|
  # puts line.reverse
  if line =~ /[aeiou]/
    puts line
  end
end

# terminal command ruby stdiner.rb beetles.text