import {useState, useEffect} from "react";
import {getQuestionsByExamId} from "../api/examService";

const useQuestions = (examId) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!examId){
            setLoading(false)
            return;
        }

        const fetchQuestions = async () => {
            try {
                // attempt to fetch courses using getResources function
                const response = await getQuestionsByExamId(examId);
                setQuestions(response.data);

            }
            catch (error) {
                setError('Error fetching exams');
            }
            finally {
                    setLoading(false);
                }
            };

            fetchQuestions();
        }, [examId]);

        return { questions, loading, error };
    };

export default useQuestions;