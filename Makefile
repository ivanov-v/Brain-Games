install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js
