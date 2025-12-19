import os
from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from PIL import Image
import io

# 1. Ayarları Yükle
load_dotenv()
gemini_api_key = os.environ.get("GEMINI_API_KEY")

genai.configure(api_key=gemini_api_key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. TAHLİL FONKSİYONU
def analyze_with_library(image_bytes, user_note=""):
    try:
        # GÜNCELLEME: Senin hesabındaki EN GÜÇLÜ modeli seçtik! 🚀
        model_name = 'gemini-2.5-flash'
        model = genai.GenerativeModel(model_name)
        
        # Resmi açmaya çalış
        try:
            image = Image.open(io.BytesIO(image_bytes))
        except Exception:
            return "HATA: Dosya açılamadı. Lütfen PDF değil, resim (JPG/PNG) yükleyin."

        prompt = f"""
        Sen VitalSense AI, uzman bir Tıbbi Laboratuvar Analistisin.
        Kullanıcı Notu: {user_note}
        
        GÖREVİN:
        1. Resimdeki laboratuvar değerlerini oku.
        2. Referans dışı (koyu renkli veya işaretli) değerleri tespit et.
        3. Bu sonuçların ne anlama geldiğini, tıbbi terimlere boğmadan, hastanın anlayacağı dilde açıkla.
        4. Sonucu temiz, maddeler halinde ver.
        """
        
        # Resmi ve soruyu birlikte gönder
        response = model.generate_content([prompt, image])
        return response.text
        
    except Exception as e:
        return f"Model Hatası ({model_name}): {str(e)}"

# 3. API KAPISI
@app.post("/analyze")
async def analyze_endpoint(file: UploadFile = File(...), note: str = Form(None)):
    print(f"📸 Dosya Geldi: {file.filename}")
    
    # Basit PDF kontrolü
    if "pdf" in file.content_type:
         return {"result": "⚠️ Lütfen PDF dosyası yüklemeyin. Tahlilin ekran görüntüsünü (JPG veya PNG) alıp yükleyin."}

    try:
        file_content = await file.read()
        sonuc = analyze_with_library(file_content, note if note else "")
        return {"result": sonuc}
    except Exception as e:
        return {"result": f"Sunucu Hatası: {str(e)}"}

@app.get("/")
async def root():
    return {"message": "VitalSense AI (Gemini 2.5) Hazır! 🚀"}