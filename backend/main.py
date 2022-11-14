"""from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .schemas import Basic,Patient
from .database import engine, meta

from .database import (
    get_all_users,
    get_user_by_id,
    create_user,
    update_user,
    delete_user
)

app = FastAPI()

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

# connection to the database
conn = meta.create_all(engine)


@app.get("/")
def hello():
    return "Hello, world"

# API endpoint to get all users
@app.get("/records/")
async def get_users():
    response = await get_all_users()
    if response:
        return response
    else:
        raise HTTPException(404, "Couldn't get users from database")


# API endpoint to get a specific users by id
@app.get("/user{id}")
async def get_user(id):
    response = await get_user_by_id(id)
    if response:
        return response
    else:
        raise HTTPException(404, f"Couldn't get the {id} from database")


# API endpoint to add a new user
@app.post("/records/add")
async def add_user(basic: Basic,patient: Patient):
    response = await create_user(basic,patient)
    if response:
        return response
    else:
        raise HTTPException(404, "Unable to add the user")


# API endpoint to update a user
@app.put("/update{id}")
async def update(id: int,basic: Basic,patient: Patient):
    response = await update_user(id,basic,patient)
    if response:
        return response
    else:
        raise HTTPException(404, "cannot update user")


# API endpoint to delete a user
@app.delete("/remove{id}/")
async def remove_user(id: int):
    response = await delete_user(id)
    if response:
        return response
    else:
        raise HTTPException(404, "could not remove user") """