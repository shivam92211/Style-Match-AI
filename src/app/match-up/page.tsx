// 'use client';

// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown support
// import rehypeRaw from 'rehype-raw'; // For HTML in markdown
// // import AnalysisResult from '@/components/AnalysisResult';
// import ImageUploadForm2 from '@/components/ImageUploadForm2';

// export default function ColorPage() {
//   const [file1, setFile1] = useState<File | null>(null);
//   const [file2, setFile2] = useState<File | null>(null);
//   const [occasion, setOccasion] = useState<string>('');
//   const [analysisResult, setAnalysisResult] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async () => {
//     if (!file1 || !file2 || !occasion) {
//       setError('Please provide both images and an occasion.');
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('file1', file1);
//     formData.append('file2', file2);
//     formData.append('occasion', occasion);

//     try {
//       const response = await fetch('https://fashion-8u2l5myq7-shivam92211s-projects.vercel.app/color-suggestion-couple/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.text(); // Text because the response is markdown
//       setAnalysisResult(result);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unknown error occurred');
//       setAnalysisResult(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pastelBlue text-charcoal flex flex-col items-center justify-center">
//       <main className="container mx-auto p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-semibold mb-6 text-darkBlue text-center">
//           Upload Images for Couple Color Analysis
//         </h2>
//         <div className="space-y-6">
//           <ImageUploadForm2
//             onFile1Change={(file) => setFile1(file)}
//             onFile2Change={(file) => setFile2(file)}
//             onOccasionChange={(e) => setOccasion(e.target.value)}
//             onSubmit={handleSubmit}
//           />
//           {isLoading && <p className="text-softPink text-center">Analyzing images, please wait...</p>}
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           {analysisResult && (
//             <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
//               <ReactMarkdown
//                 children={analysisResult}
//                 remarkPlugins={[remarkGfm]} // For GitHub Flavored Markdown
//                 rehypePlugins={[rehypeRaw]} // For HTML in markdown
//               />
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }





'use client';

import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown support
// import rehypeRaw from 'rehype-raw'; // For HTML in markdown
import AnalysisResult from '@/components/AnalysisResult';
import ImageUploadForm2 from '@/components/ImageUploadForm2';

export default function ColorPage() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [occasion, setOccasion] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!file1 || !file2 || !occasion) {
      setError('Please provide both images and an occasion.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('occasion', occasion);

    try {
      const response = await fetch('https://available-christye-shivam92211-89079531.koyeb.app/couple-suggestion/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.text(); // Text because the response is markdown
      setAnalysisResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setAnalysisResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pastelBlue text-charcoal flex flex-col items-center justify-center">
      <main className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-darkBlue text-center">
          Upload Images for Couple Color Analysis
        </h2>
        <div className="space-y-6">
          <ImageUploadForm2
            onFile1Change={(file) => setFile1(file)}
            onFile2Change={(file) => setFile2(file)}
            onOccasionChange={(e) => setOccasion(e.target.value)}
            onSubmit={handleSubmit}
          />
          {isLoading && <p className="text-softPink text-center">Analyzing images, please wait...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {/* {analysisResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
              <ReactMarkdown
                // remarkPlugins={[remarkGfm]} // For GitHub Flavored Markdown
                rehypePlugins={[rehypeRaw]} // For HTML in markdown
              >
                {analysisResult} 
              </ReactMarkdown>
            </div>
          )} */}
          {analysisResult && <AnalysisResult result={analysisResult} />}

        </div>
      </main>
    </div>
  );
}
