FROM postgres:14

# Copy the initialization script to the appropriate directory
COPY database/definition.sql /docker-entrypoint-initdb.d/init.sql