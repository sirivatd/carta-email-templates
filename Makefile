build:
	@docker build . -t email-templating-backend

run:
	@docker run -it -p 5000:5000 email-templating-backend