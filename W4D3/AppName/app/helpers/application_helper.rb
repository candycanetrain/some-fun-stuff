module ApplicationHelper

  def highlight(text)
    "<strong class=\"highlight\">#{h(text)}</strong>".html_safe
  end

  def picture_for(user)
    html = "<div class=\"user-picture\">"
    html += "<img src=\"#{user.picture_url}\" alt=\"#{h(user.name)}\">"
    html += "</div>"

    html.html_safe
  end
end
