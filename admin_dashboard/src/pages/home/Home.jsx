import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/Featuredinfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { getUsersStats } from "../../components/service/api";

const Home = () => {
  const MONTHS = useMemo(()=>
  [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December" 
  ],
  [] );


  const [userStats,setUserStats] = useState([]);

  useEffect(()=>{
    const getUserStatistics = async()=>{
      const response = await getUsersStats();
       response.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"New User":item.total}]));
    }
    getUserStatistics();
  },[MONTHS]);

  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" dataKey="New User" grid/>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home;