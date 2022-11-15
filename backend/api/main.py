import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from alchemy_models.db_meta import meta, database, engine

from Endpoints.post_endpoint import post_router
from Endpoints.get_endpoint import get_router
from Endpoints.update_endpoint import update_router
from Endpoints.delete_endpoint import delete_router

app = FastAPI(title="Oncology Api")

# to interact with different port of backend
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create all tables in the database
meta.create_all(engine)

@app.on_event("startup")
async def startup():
    # create all tables in the database
    # await meta.create_all(engine)
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
def hello():
    return "Go to Docs"

app.include_router(get_router)
app.include_router(post_router)
app.include_router(update_router)
app.include_router(delete_router)

if __name__ == '__main__':
    uvicorn.run("api.main:app", host='127.0.0.1', port=8000,
                log_level="info", reload=True)