import LabAnalysis from "./components/LabAnalysis"; // Yolu kendine göre ayarla

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          VitalSense AI
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Laboratuvar sonuçlarınızı saniyeler içinde yorumlayın.
        </p>
        
        {/* Bileşeni buraya koyuyoruz */}
        <LabAnalysis />
        
      </div>
    </main>
  );
}