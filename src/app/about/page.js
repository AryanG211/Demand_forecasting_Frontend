import React from 'react'
import Banner from '../Components/Banner'
import imgDesk from "../Assets/AboutBanner.svg"
import imgMob from "../Assets/AboutBanner.svg"
import ImgText from '../Components/ImgText'
import imgText from '../Assets/WhoWeAre.svg'
import Objectives from '../Components/Objectives'
import GetInTouch from '../Components/GetInTouch'
const page = () => {
    return (
        <div>
            <Banner imgDesk={imgDesk} imgMob={imgMob} AboutContent={true} />
            <ImgText
                imgText={imgText}
                subHeading={"About AgroScope"}
                Heading={"Who We Are"}
                Description={"We are a team of passionate professionals committed to driving innovation and excellence in our field. With a focus on sustainable solutions, we aim to improve lives and empower businesses through cutting-edge technologies and expert insights. Our goal is to foster growth, optimize processes, and create lasting impact across industries. Through collaboration and continuous improvement, we strive to build a better future for all."}
            />

            <Objectives />
            <GetInTouch />
        </div>
    )
}

export default page
