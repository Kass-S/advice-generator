import { Card } from "flowbite-react"
import { GetAdvice } from "../src/service/service"
import { useState, useEffect } from "react"
import diceIcon from "../src/assets/icon-dice.svg";
import mobileDivider from "../src/assets/pattern-divider-mobile.svg";
import desktopDivider from "../src/assets/pattern-divider-desktop.svg";

const AdviceCardComponent = () => {
    const [advice, setAdvice] = useState([]);
    const [idNumber, setIdNumber] = useState([]);


    const fetchAdvice = async () => {
        let data = await GetAdvice();
        setAdvice(data.slip.advice);
        setIdNumber(data.slip.id);
    }
    fetchAdvice();

    useEffect(() => {
        fetchAdvice();
    }, [advice])

    return(
        <div className="m-4">
            <Card className="min-w-96 max-w-sm mx-4 card-bg-color p-2 pb-4">
                <h5 className=" tracking-tight text-color-number text-center">
                    ADVICE #{idNumber}
                </h5>
                <p className="text-color-advice text-center text-2xl font-extrabold">
                    "{advice}"
                </p>

                <img className="my-2 sm:hiddden" src={mobileDivider} alt="pattern divider" />
                <img className="hidden sm:block sm:my-2" src={desktopDivider} alt="pattern divider" />

                

            </Card>
            <div className="flex justify-center relative ">
                <button className="bg-color-number rounded-full p-4 hover:shadow-lg hover:cursor-pointer -top-5" onClick={() => {
                    fetchAdvice();
                }}>
                    <img className="" src={diceIcon} alt="dice icon" />
                </button>
            </div>
            
        </div>
    )
}

export default AdviceCardComponent