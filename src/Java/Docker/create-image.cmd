docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test17-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test17-java/app ../../..
