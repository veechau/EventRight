@gatherings.each do |gathering|
  json.partial! 'gathering', gathering: gathering
end
