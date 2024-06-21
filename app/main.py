from app.api import chain
from fastapi import FastAPI
# from app.logger import get_logger

# logger = get_logger(__name__)

app = FastAPI()

#app.include_router(prompt.router, prefix="/api/v1/prompt", tags=["prompt"])
app.include_router(chain.router, prefix="/api/chain", tags=["chain"])
#app.include_router(unstructured.router, prefix="/api/v1/unstructured", tags=["unstructured"])

@app.get("/")
async def root():
    # logger.info("Root endpoint accessed")
    return {"message": "Hello World"}
