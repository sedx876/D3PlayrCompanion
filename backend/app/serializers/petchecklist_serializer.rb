class PetchecklistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :done
end
