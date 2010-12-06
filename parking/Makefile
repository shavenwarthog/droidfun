all:

SHOW :=	curl http://localhost/droidfun/parking/parking.cgi

test:
	curl -i -X POST -d '{}' \
	http://localhost/droidfun/parking/parking.cgi
	$(SHOW)
	curl -i -X POST -d '{"beer":{"very":"tasty"}}' \
	http://localhost/droidfun/parking/parking.cgi
	$(SHOW)
	curl -i -X POST -d '{"pi":3.14}' \
	http://localhost/droidfun/parking/parking.cgi
	$(SHOW)

zoot:
	$(SHOW)
