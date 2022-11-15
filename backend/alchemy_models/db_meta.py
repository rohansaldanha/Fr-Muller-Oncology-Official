import databases
import database_connection_params
from sqlalchemy import create_engine
from sqlalchemy import MetaData


database = databases.Database(database_connection_params.DATABASE_URL)
engine = create_engine(database_connection_params.DATABASE_URL)
# engine = create_engine(
#     database_connection_params.DATABASE_URL,
#     pool_size=3,
#     max_overflow=0)

meta = MetaData()