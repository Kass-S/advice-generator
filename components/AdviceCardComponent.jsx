import { Card } from "flowbite-react"
import { GetAdvice } from "../src/service/service"
import { useState, useEffect } from "react"

const AdviceCardComponent = () => {
    const [advice, setAdvice] = useState([]);
    const [idNumber, setIdNumber] = useState([]);


    const fetchAdvice = async () => {
        let data = await GetAdvice();
        setAdvice(data.slip.advice);
        setIdNumber(data.slip.id);
    }
    fetchAdvice();

    // useEffect(() => {
    //     fetchAdvice();
    // }, [])

    return(
        <div className="m-4">
            <Card className="min-w-96 min-h-56 max-w-sm mx-4 card-bg-color p-2">
                <h5 className=" tracking-tight text-color-number text-center">
                    ADVICE #{idNumber}
                </h5>
                <p className="text-color-advice text-center text-2xl font-extrabold">
                    "{advice}"
                </p>

                <img className="my-2 sm:invisible" src="./src/assets/pattern-divider-mobile.svg" alt="pattern divider" />
                <img className="invisible sm:visible" src="./src/assets/pattern-divider-desktop.svg" alt="pattern divider" />

                <button className="flex justify-center ">
                    <img className="p-4 bg-color-number rounded-full" src="./src/assets/icon-dice.svg" alt="dice icon" />
                </button>

            </Card>
        </div>
    )
}

export default AdviceCardComponent