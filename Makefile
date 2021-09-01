	
build:
	docker build -t frontend:latest .
	docker tag frontend:latest recobook/frontend:latest
publish:
	docker image push recobook/frontend:latest
