docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test17/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test17/app ../..
