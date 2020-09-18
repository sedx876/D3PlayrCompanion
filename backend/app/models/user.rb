class User < ApplicationRecord
  has_secure_password
  has_many :characters
  has_many :petchecklists
  validates :username, presence: true
  validates :username, uniqueness: true
end
