@categories.each do |category|
  json.partial! 'category', category: category
end
