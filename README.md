Content Generated by AI and needs to be fixed, use https://psychusa.fandom.com/wiki/List_of_Episodes

NGINX config with this repo cloned into /psych/
```
server {
    listen 80;
    server_name _;

    location /transit {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Prefix /transit;
    }

    location /psych {
	alias /var/www/html/psych/;
	index index.html;
	try_files $uri $uri/ /index.html; 
    }
}
```
