# Postgres Database URL -> [ change the credentials to your own creadentials ]
connection_dict = {
    "DB_TYPE": "postgresql",
    "USERNAME": "postgres",
    "PASSWORD": "root",
    "HOST": "localhost",
    "DB_NAME": "frmullerfinal",
}
# 'postgresql://db_username:db_password@host_server:db_server_port/database_name?sslmode=prefer'
# SQLALCHEMY_DATABASE_URL = f"{DB_TYPE}://{USERNAME}:{PASSWORD}@{HOST}/{DB_NAME}"
DATABASE_URL = f"{connection_dict['DB_TYPE']}://{connection_dict['USERNAME']}:{connection_dict['PASSWORD']}@{connection_dict['HOST']}/{connection_dict['DB_NAME']}"

