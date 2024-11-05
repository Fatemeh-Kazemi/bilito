import axios from 'axios';
import { useEffect, useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);  
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/questions');
        setQuestions(response.data.results);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data", error);
      }
    };

    fetchQuestions();
  }, []);

  if (error) return <div>خطا در بارگذاری داده‌ها: {error}</div>;


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      <p className="text-2xl text-right font-bold text-gray-500">
        سوالات متداول
      </p>
      <div className="w-full border">
        {questions.map((x, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-right">{x.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15l-3-3h6l-3 3z"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 text-right text-gray-600 bg-gray-50">
                <p>{x.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
