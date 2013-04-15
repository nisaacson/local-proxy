MOCHA=node_modules/.bin/mocha
REPORTER?=tap
test: proxy
proxy:
	$(MOCHA) test/proxy-test.js --reporter $(REPORTER)
.PHONY: test
