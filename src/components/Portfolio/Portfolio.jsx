import React, { useEffect, useState } from 'react'
import './portfolio.css'
import PortfolioList from '../portfoliolist/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
} from "../../data";


const Portfolio = () => {
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
  
    {
      id: "design",
      title: "Design",
    },
  
  ];


  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])


  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul className='portfolioUI'>
        {list.map((item)=>{
          return <PortfolioList title={item.title} key={item.id} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        })}
      </ul>
      <div className='portfolioContainer' style={{ marginTop:'25px' }}>
          {data.map((d)=>{
            return(
              <a href={d.link} target='_blank'>
                <div className='portfolioItem'>
                <img src={d.img} alt="" className='' />
                <h3>{d.title}</h3>
             </div>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default Portfolio