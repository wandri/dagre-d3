NPM = npm
NODE = node

.PHONY: all build clean dist lint test typecheck

all: test lint

build:
	$(NPM) run build

typecheck:
	$(NPM) run typecheck

lint:
	$(NPM) run lint

test:
	$(NPM) test

dist: build test

clean:
	$(NODE) -e "require('fs').rmSync('build', { recursive: true, force: true }); require('fs').rmSync('dist/demo', { recursive: true, force: true });"
