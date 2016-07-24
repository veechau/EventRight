class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :first_name, :last_name, :avatar, :email, :address, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :gatherings, dependent: :destroy,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: 'Gathering'

  has_many :tickets, dependent: :destroy,
  primary_key: :id,
  foreign_key: :attendee_id,
  class_name: 'Ticket'

  has_many :bookmarks, dependent: :destroy,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Bookmark'

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64(16)
    end
  end
end
