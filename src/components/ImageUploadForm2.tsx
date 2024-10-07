// 'use client';

// import React, { useState } from 'react';
// import { FaUpload } from 'react-icons/fa';
// import { useSpring, animated } from 'react-spring';

// interface ImageUploadFormProps {
//   onFile1Change: (file: File | null) => void;
//   onFile2Change: (file: File | null) => void;
//   onOccasionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit: () => void;
// }

// const ImageUploadForm2: React.FC<ImageUploadFormProps> = ({ onFile1Change, onFile2Change, onOccasionChange, onSubmit }) => {
//   const [file1, setFile1] = useState<File | null>(null);
//   const [file2, setFile2] = useState<File | null>(null);
//   const [preview1, setPreview1] = useState<string | null>(null);
//   const [preview2, setPreview2] = useState<string | null>(null);

//   const { scale } = useSpring({
//     scale: file1 || file2 ? 1.05 : 1,
//     config: { tension: 200, friction: 10 },
//   });

//   const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0] || null;
//     setFile1(selectedFile);
//     onFile1Change(selectedFile);
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview1(reader.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setPreview1(null);
//     }
//   };

//   const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0] || null;
//     setFile2(selectedFile);
//     onFile2Change(selectedFile);
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview2(reader.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setPreview2(null);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
//         <div className='flex space-x-4'>
//         <div className="relative w-full max-w-md mb-6 flex-1 bg-gray-300 p-4 rounded-lg shadow-md">
//         <animated.div
//           style={{ transform: scale.to((s) => `scale(${s})`) }}
//           className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
//         >
//           <label htmlFor="file-upload1" className="flex flex-col items-center cursor-pointer">
//             <FaUpload size={48} className="text-charcoal-gray mb-2" />
//             <span className="text-charcoal-gray">
//               {file1 ? 'Change Image 1' : 'Click or Drag to Upload Image 1'}
//             </span>
//             <input
//               id="file-upload1"
//               type="file"
//               accept="image/*"
//               onChange={handleFile1Change}
//               className="hidden"
//             />
//           </label>
//           {preview1 && <img src={preview1} alt="Preview 1" className="mt-4 max-w-full rounded-lg shadow-md" />}
//         </animated.div>
//       </div>
//       <div className="relative w-full max-w-md mb-6 flex-1 bg-gray-300 p-4 rounded-lg shadow-md">
//         <animated.div
//           style={{ transform: scale.to((s) => `scale(${s})`) }}
//           className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
//         >
//           <label htmlFor="file-upload2" className="flex flex-col items-center cursor-pointer">
//             <FaUpload size={48} className="text-charcoal-gray mb-2" />
//             <span className="text-charcoal-gray">
//               {file2 ? 'Change Image 2' : 'Click or Drag to Upload Image 2'}
//             </span>
//             <input
//               id="file-upload2"
//               type="file"
//               accept="image/*"
//               onChange={handleFile2Change}
//               className="hidden"
//             />
//           </label>
//           {preview2 && <img src={preview2} alt="Preview 2" className="mt-4 max-w-full rounded-lg shadow-md" />}
//         </animated.div>
//       </div>

//         </div>
      
//       <input
//         type="text"
//         onChange={onOccasionChange}
//         placeholder="Enter occasion..."
//         className="bg-white border border-gray-300 p-2 rounded-md mb-4 w-full max-w-md"
//       />
//       <button
//         type="button"
//         onClick={onSubmit}
//         disabled={!file1 || !file2}
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-soft-pink transition-colors disabled:bg-gray-400"
//       >
//         Analyze Images
//       </button>
//     </div>
//   );
// };

// export default ImageUploadForm2;




'use client';

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image'; // Import the Next.js Image component

interface ImageUploadFormProps {
  onFile1Change: (file: File | null) => void;
  onFile2Change: (file: File | null) => void;
  onOccasionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ImageUploadForm2: React.FC<ImageUploadFormProps> = ({ onFile1Change, onFile2Change, onOccasionChange, onSubmit }) => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [preview1, setPreview1] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);

  const { scale } = useSpring({
    scale: file1 || file2 ? 1.05 : 1,
    config: { tension: 200, friction: 10 },
  });

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile1(selectedFile);
    onFile1Change(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview1(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview1(null);
    }
  };

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile2(selectedFile);
    onFile2Change(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview2(null);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <div className='flex space-x-4'>
        <div className="relative w-full max-w-md mb-6 flex-1 bg-gray-300 p-4 rounded-lg shadow-md">
          <animated.div
            style={{ transform: scale.to((s) => `scale(${s})`) }}
            className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
          >
            <label htmlFor="file-upload1" className="flex flex-col items-center cursor-pointer">
              <FaUpload size={48} className="text-charcoal-gray mb-2" />
              <span className="text-charcoal-gray">
                {file1 ? 'Change Image 1' : 'Click or Drag to Upload Image 1'}
              </span>
              <input
                id="file-upload1"
                type="file"
                accept="image/*"
                onChange={handleFile1Change}
                className="hidden"
              />
            </label>
            {preview1 && (
              <div className="mt-4 relative w-full h-64">
                <Image
                  src={preview1}
                  alt="Preview 1"
                  layout="fill" // Makes the image fill the container
                  objectFit="contain" // Preserves aspect ratio
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
          </animated.div>
        </div>
        <div className="relative w-full max-w-md mb-6 flex-1 bg-gray-300 p-4 rounded-lg shadow-md">
          <animated.div
            style={{ transform: scale.to((s) => `scale(${s})`) }}
            className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
          >
            <label htmlFor="file-upload2" className="flex flex-col items-center cursor-pointer">
              <FaUpload size={48} className="text-charcoal-gray mb-2" />
              <span className="text-charcoal-gray">
                {file2 ? 'Change Image 2' : 'Click or Drag to Upload Image 2'}
              </span>
              <input
                id="file-upload2"
                type="file"
                accept="image/*"
                onChange={handleFile2Change}
                className="hidden"
              />
            </label>
            {preview2 && (
              <div className="mt-4 relative w-full h-64">
                <Image
                  src={preview2}
                  alt="Preview 2"
                  layout="fill" // Makes the image fill the container
                  objectFit="contain" // Preserves aspect ratio
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
          </animated.div>
        </div>
      </div>
      
      <input
        type="text"
        onChange={onOccasionChange}
        placeholder="Enter occasion..."
        className="bg-white border border-gray-300 p-2 rounded-md mb-4 w-full max-w-md"
      />
      <button
        type="button"
        onClick={onSubmit}
        disabled={!file1 || !file2}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-soft-pink transition-colors disabled:bg-gray-400"
      >
        Analyze Images
      </button>
    </div>
  );
};

export default ImageUploadForm2;
