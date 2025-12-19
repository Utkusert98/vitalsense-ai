"use client";

import { useState } from "react";

export default function LabAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Dosya seçilince çalışır
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Önizleme için URL oluştur
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setResult(""); // Eski sonucu temizle
    }
  };

  // Analiz Et butonuna basılınca çalışır
  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setResult("");

    // Form Verisi Hazırla (Resim göndermek için FormData kullanılır)
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("note", "Lütfen bu tahlili detaylı yorumla.");

    try {
      // Python API'ye İstek At
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData, 
        // DİKKAT: FormData kullanırken 'Content-Type' header'ı yazılmaz!
        // Tarayıcı bunu otomatik halleder.
      });

      const data = await response.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setResult("Bir hata oluştu, sonuç alınamadı.");
      }
    } catch (error) {
      console.error("Hata:", error);
      setResult("Sunucuya bağlanılamadı. Backend terminali açık mı?");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        🩸 Tahlil Analiz Asistanı
      </h2>

      {/* Dosya Yükleme Alanı */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Tahlil Resmini Yükle (JPG/PNG)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {/* Önizleme */}
      {preview && (
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Seçilen Dosya:</p>
          <img src={preview} alt="Tahlil Önizleme" className="h-48 rounded-lg border border-gray-300 object-contain" />
        </div>
      )}

      {/* Buton */}
      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className={`w-full py-3 px-4 rounded-lg font-bold text-white transition duration-200 
          ${!selectedFile || loading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700 shadow-md"}`}
      >
        {loading ? "⌛ Yapay Zeka İnceliyor..." : "🔍 Tahlili Yorumla"}
      </button>

      {/* Sonuç Alanı (Markdown benzeri formatlama) */}
      {result && (
        <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <h3 className="text-lg font-bold text-green-800 mb-4">📝 Analiz Sonucu:</h3>
          <div className="prose prose-blue text-gray-800 whitespace-pre-line">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}