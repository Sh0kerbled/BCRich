# main.py
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import google.generativeai as genai
from pydantic import BaseModel

genai.configure(api_key="AIzaSyAh6SAi74kObmPYntdpOd4opOCsjKK2Sf0")

app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

class Message(BaseModel):
    message: str

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("AIhelper.html", {"request": request})

@app.post("/chat/")
async def chat(message: Message):
    model = genai.GenerativeModel('gemini-2.0-flash')
    response = model.generate_content(message.message)
    return {"response": response.text}