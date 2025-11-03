This is a Shool project. The goal is to recreate rawg.io´s website using their API.

To run the frontend locally type: npm run dev
Run the backend: npm start
Run the seeder: npm start

Use docker

To use the mysql db:
Docker compose up --build

To use the postgres db:
docker compose -f docker-compose-postgres.yml up -d --build
if failing: docker compose -f docker-compose-postgres.yml down -v --remove-orphans
