// 'use client';

// import React, { useState } from 'react';
// import AnalysisResult from '@/components/AnalysisResult';
// import ImageUploadForm from '@/components/ImageUploadForm';

// export default function ColorPage() {
//   const [analysisResult, setAnalysisResult] = useState<any | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (file: File) => {
//     setIsLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('file', file);

//     // http://127.0.0.1:8000/color-suggestion/
//     try {
//       const response = await fetch('https://fashion-8u2l5myq7-shivam92211s-projects.vercel.app/color-suggestion/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       setAnalysisResult(result);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unknown error occurred');
//       setAnalysisResult(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pastelBlue text-charcoal">
      
//       <main className="container mx-auto p-6">
//         <h2 className="text-3xl font-semibold mb-6 text-darkBlue text-center">
//             Upload Your Image for Color Analysis
//         </h2>
//         <ImageUploadForm onSubmit={handleSubmit} />
//         {isLoading && <p className="text-softPink">Analyzing your image, please wait...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {analysisResult && <AnalysisResult result={analysisResult} />}
//       </main>
//     </div>
//   );
// }





'use client';

import React, { useState } from 'react';
import AnalysisResult from '@/components/AnalysisResult';
import ImageUploadForm from '@/components/ImageUploadForm';

export default function ColorPage() {
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (file: File) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://fashion-8u2l5myq7-shivam92211s-projects.vercel.app/color-suggestion/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.text(); // Change this to text() instead of json()
      setAnalysisResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setAnalysisResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pastelBlue text-charcoal">
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-darkBlue text-center">
          Upload Your Image for Color Analysis
        </h2>
        <ImageUploadForm onSubmit={handleSubmit} />
        {isLoading && <p className="text-softPink">Analyzing your image, please wait...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {analysisResult && <AnalysisResult result={analysisResult} />}
      </main>
    </div>
  );
}