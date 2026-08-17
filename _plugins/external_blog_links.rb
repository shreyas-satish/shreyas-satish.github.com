# Make external references in essays behave as external links without adding
# client-side JavaScript to otherwise static reading pages.
require "uri"

Jekyll::Hooks.register :posts, :post_render do |post|
  next unless post.url.start_with?("/blog/")

  post.output = post.output.gsub(/<a\b([^>]*\bhref=(['"])(https?:\/\/[^'">]+)\2[^>]*)>/i) do
    attributes = Regexp.last_match(1)
    href = Regexp.last_match(3)

    begin
      external = URI.parse(href).host&.downcase != "shreyas.sh"
    rescue URI::InvalidURIError
      external = false
    end

    if external && attributes !~ /\btarget\s*=/i
      "<a#{attributes} target=\"_blank\" rel=\"noopener noreferrer\">"
    else
      "<a#{attributes}>"
    end
  end
end
