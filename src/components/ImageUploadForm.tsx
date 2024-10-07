// 'use client';

// import React, { useState } from 'react';
// import { FaUpload } from 'react-icons/fa';
// import { useSpring, animated } from 'react-spring';

// interface ImageUploadFormProps {
//   onSubmit: (file: File) => void;
// }

// const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onSubmit }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);

//   const { scale } = useSpring({
//     scale: file ? 1.05 : 1,
//     config: { tension: 200, friction: 10 },
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0] || null;
//     setFile(selectedFile);
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setPreview(null);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (file) {
//       onSubmit(file);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
//       <div className="relative w-full max-w-md mb-6">
//         <animated.div
//           style={{ transform: scale.to((s) => `scale(${s})`) }}
//           className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
//         >
//           <label
//             htmlFor="file-upload"
//             className="flex flex-col items-center cursor-pointer"
//           >
//             <FaUpload size={48} className="text-charcoal-gray mb-2" />
//             <span className="text-charcoal-gray">
//               {file ? 'Change Image' : 'Click or Drag to Upload'}
//             </span>
//             <input
//               id="file-upload"
//               type="file"
//               accept="image/*"
//               onChange={handleChange}
//               className="hidden"
//             />
//           </label>
//           {preview && (
//             <img
//               src={preview}
//               alt="Preview"
//               className="mt-4 max-w-full rounded-lg shadow-md"
//             />
//           )}
//         </animated.div>
//       </div>
//       <div className='p'>
//       <button
//         type="submit"
//         onClick={handleSubmit}
//         disabled={!file}
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg 
//         hover:bg-darkBlue focus:outline-none focus:ring-2 
//         focus:ring-soft-pink transition-colors disabled:bg-gray-400"
//       >
//         Analyze Image
//       </button>
//       </div>
      
//     </div>
    
//   );
// };

// export default ImageUploadForm;



'use client';

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image'; // Import the Next.js Image component

interface ImageUploadFormProps {
  onSubmit: (file: File) => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onSubmit }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const { scale } = useSpring({
    scale: file ? 1.05 : 1,
    config: { tension: 200, friction: 10 },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="relative w-full max-w-md mb-6">
        <animated.div
          style={{ transform: scale.to((s) => `scale(${s})`) }}
          className="flex flex-col items-center border-2 border-dashed border-charcoal-gray p-4 rounded-lg hover:border-soft-pink transition-colors"
        >
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <FaUpload size={48} className="text-charcoal-gray mb-2" />
            <span className="text-charcoal-gray">
              {file ? 'Change Image' : 'Click or Drag to Upload'}
            </span>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>
          {preview && (
            <div className="mt-4 max-w-full rounded-lg shadow-md relative w-full h-64">
              <Image
                src={preview}
                alt="Preview"
                layout="fill" // Ensures the image fills the container
                objectFit="contain" // Keeps aspect ratio
                className="rounded-lg"
              />
            </div>
          )}
        </animated.div>
      </div>
      <div className='p'>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!file}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg 
          hover:bg-darkBlue focus:outline-none focus:ring-2 
          focus:ring-soft-pink transition-colors disabled:bg-gray-400"
        >
          Analyze Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploadForm;
