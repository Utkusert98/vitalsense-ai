import os
import google.generativeai as genai
from dotenv import load_dotenv

# Ayarları yükle
load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")

if not api_key:
    print("❌ HATA: .env dosyasında API anahtarı bulunamadı!")
else:
    print(f"✅ API Anahtarı bulundu: {api_key[:5]}... (Gizlendi)")
    
    # Google'a bağlan
    genai.configure(api_key=api_key)

    print("\n🔍 --- HESABINDA KULLANABİLECEĞİN MODELLER ---")
    try:
        # Tüm modelleri çek
        for m in genai.list_models():
            # Sadece içerik üretebilenleri (işimize yarayanları) göster
            if 'generateContent' in m.supported_generation_methods:
                print(f"👉 {m.name}")
    except Exception as e:
        print(f"❌ Bağlantı hatası: {e}")

    print("\n------------------------------------------------")