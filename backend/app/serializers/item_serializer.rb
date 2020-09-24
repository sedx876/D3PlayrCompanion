class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :notes
end
