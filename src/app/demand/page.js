import React from 'react'
import PredictionChart from '../Components/PredictionChart'
import Banner from '../Components/Banner'
import imgDesk from "../Assets/DemandPredict.svg"
import imgMob from "../Assets/DemandPredict.svg"
import GetInTouch from '../Components/GetInTouch'

const page = () => {
    return (
        <div>
            <Banner imgDesk={imgDesk} imgMob={imgMob} demandContent={true} />
            <PredictionChart />
            <GetInTouch />
        </div>
    )
}

export default page
