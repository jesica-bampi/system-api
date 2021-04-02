FROM postgres:latest
COPY ./scripts/script.sql /docker-entrypoint-initdb.d/

EXPOSE 5432