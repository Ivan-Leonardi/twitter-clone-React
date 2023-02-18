import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answer, setAnswer] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso.'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()

        setAnswer([newAnswer, ...answer])
        setNewAnswer('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && event.ctrlKey) {
            setAnswer([newAnswer, ...answer])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
            <Header title='Tweet' />

            <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus et ipsa, architecto sed voluptatibus, blanditiis iste, " />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/Ivan-Leonardi.png" alt="Ivan Leonardi" />
                    <textarea
                        id="tweet"
                        placeholder='Tweet sua resposta'
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>

                <button type="submit">
                    <PaperPlaneRight /> 
                    <span>Resposta</span> 
                </button>
            </form>



            {answer.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}