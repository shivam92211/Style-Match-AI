// components/AnalysisResult.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


interface AnalysisResultProps {
  result: string; // Assuming the result is a markdown string
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h3 className="text-lg font-semibold text-sage mb-2">Color Suggestions:</h3>

      {/* <ReactMarkdown className="prose max-w-none text-purple-800">
        {result}
      </ReactMarkdown> */}

    <ReactMarkdown
        className="prose max-w-none text-black"
        remarkPlugins={[remarkGfm]}
        components={{
          strong: ({ children }) => (
            <strong className="text-olive">{children}</strong> // Apply olive color to bold text
          ),
        }}
      >
        {result}
      </ReactMarkdown>

    </div>
  );
};

export default AnalysisResult;





// import React from 'react';

// interface AnalysisResultProps {
//   result: string;
// }

// const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
//   return (
//     <div className="mt-6 p-4 bg-white rounded shadow">
//       <h3 className="text-xl font-semibold mb-2">Analysis Result</h3>
//       <div dangerouslySetInnerHTML={{ __html: result }} />
//     </div>
//   );
// };

// export default AnalysisResult;