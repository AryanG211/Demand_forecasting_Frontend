import React from 'react';
import Banner from '../Components/Banner';
import imgMob from "../Assets/MarketBanner.svg";
import imgDesk from '../Assets/MarketBanner.svg';
import CompaniesMarket from '../Components/CompaniesMarket';
const page = () => {
    return (
        <div>
            <Banner imgDesk={imgDesk} imgMob={imgMob} MarketContent={true} />
            <CompaniesMarket />
        </div>
    )
}

export default page
