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
        <div className="flex justify-center m-4">
            <Card className="min-w-96 max-w-sm mx-4 card-bg-color">
                <h5 className=" tracking-tight text-color-number text-center">
                    ADVICE #{idNumber}
                </h5>
                <p className="text-color-advice text-center text-2xl font-extrabold">
                    "{advice}"
                </p>
                

            </Card>
        </div>
    )
}

export default AdviceCardComponent