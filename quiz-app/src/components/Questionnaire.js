import React from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';


const Questionnaire = ({ handleAnswer, data : {question, correct_answer, answers}, showAnswers, handleNextQuestion }) => {

    return (
    <div className="flex flex-col">
        <div className="bg-white text-purple-800 p-10 rounded shadow-md">
            <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question}} />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
            {answers.map(answer => {
                const textColor = showAnswers ? answer === correct_answer ? 'text-green-800' : 'text-red-800' : 'text-purple-800';
                
                return(    
                    <button className={`${textColor} bg-white p-4 font-semibold rounded shadow`} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer}} />
                )    
                }  
            )}
        </div>
        {showAnswers && (<button onClick={handleNextQuestion} className="ml-auto bg-purple-700 text-white p-4 mt-6 font-semibold rounded shadow">Next Question</button>)}
    </div>
    
    )
};

export default Questionnaire;