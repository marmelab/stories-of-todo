install:
	@echo "Installing..."
	npm install
	@echo "Done!"

storybook:
	@echo "Starting Storybook..."
	npm run storybook

start-api:
	@echo "Starting..."
	cd api && docker compose up -d
	@echo "Done!"

stop-api:
	@echo "Stopping..."
	cd api && docker compose down
	@echo "Done!"

dev:
	@echo "Starting API..."
	make start-api
	@echo "Starting dev..."
	npm run dev

start:
	@echo "Starting..."
	cd api && docker compose up -d
	npm run build
	npm run preview
	@echo "Done!"

interaction-test:
	@echo "Running interaction test..."
	npm run storybook:test -- --watch -u