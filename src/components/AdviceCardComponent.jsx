import { Card } from "flowbite-react"
import { GetAdvice } from "../service/service"
import { useState } from "react"
import diceIcon from "/assets/icon-dice.svg"
import desktopDivider from "/assets/pattern-divider-desktop.svg"
import mobileDivider from "/assets/pattern-divider-mobile.svg"

const AdviceCardComponent = () => {
    const [advice, setAdvice] = useState([]);
    const [idNumber, setIdNumber] = useState([]);


    const fetchAdvice = async () => {
        let data = await GetAdvice();
        setAdvice(data.slip.advice);
        setIdNumber(data.slip.id);
    }
    fetchAdvice();


    return (
        <div className=" relative">
            <Card className="min-w-80 max-w-sm card-bg-color p-2 pb-4 ">
                <h5 className="tracking-tight text-color-number text-center">
                    ADVICE #{idNumber}
                </h5>
                <p className="text-color-advice text-center text-2xl font-extrabold">
                    "{advice}"
                </p>
    
                <img className="my-2 sm:hidden" src={mobileDivider} alt="pattern divider" />
                <img className="hidden sm:block sm:my-2" src={desktopDivider} alt="pattern divider" />
            </Card>
            
            <div className="flex justify-center absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <button className="bg-color-number rounded-full p-4 hover:shadow-lg hover:cursor-pointer" onClick={() => {
                    fetchAdvice();
                }}>
                    <img className="" src={diceIcon} alt="dice icon" />
                </button>
            </div>
        </div>
    )
}

export default AdviceCardComponent