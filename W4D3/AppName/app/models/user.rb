class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :password_digest, presence: true {}
  validates :password, length: 6 {allow_nil: true}
  validate :ensure_session_token

  def find_by_credentials(:username, :password)

  end

  def generate_session_token

  end

  def reset_session_token!

  end
  def ensure_session_token

  end

end
