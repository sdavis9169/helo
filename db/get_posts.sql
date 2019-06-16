select title, image_url, content, username
from posts
INNER JOIN users on posts.user_id  = users.id 