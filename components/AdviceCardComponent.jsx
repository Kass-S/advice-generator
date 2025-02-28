import { Card } from "flowbite-react"

const AdviceCardComponent = () => {


    return(
        <div className="flex justify-center m-4">
            <Card className="max-w-sm mx-4 card-bg-color">
                <h5 className=" tracking-tight text-color-number text-center">
                    Advice
                </h5>
                <p className="font-normal text-color-advice text-center text-2xl">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                

            </Card>
        </div>
    )
}

export default AdviceCardComponent