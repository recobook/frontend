	
build:
	docker build -t frontend:latest .
	docker tag frontend:latest recobook/frontend:latest
push:
	docker image push recobook/frontend:latest
	
release: build push