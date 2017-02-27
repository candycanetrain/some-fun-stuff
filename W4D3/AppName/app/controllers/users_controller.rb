class UsersController < ApplicationController
  def create
    u = User.create(user_params)

    msg = UserMailer.welcome_email(u)
    msg.deliver

    render :root
  end
end
