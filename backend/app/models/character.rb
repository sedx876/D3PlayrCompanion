class Character < ApplicationRecord
  belongs_to :user
  # validate :user, presence: true
end
