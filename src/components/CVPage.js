import * as React from 'react';


import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import headerImage from "../images/home_image3.jpg"
import "../styles/CVPage.css"


function CVPage() {
    
  const [numPages, setNumPages] = React.useState();
  const [pageNumber, setPageNumber] = React.useState(1);

  const work_experience = [
    {
      job: "Programmer",
      where: "Centro ITAM para Datos + Algoritmos",
      date: "08/2021 - Present",
      completed_tasks: [
        "Web scraping using Selenium and BeautifulSoup",
        "Data filtering",
        "Creation of ETL architecture for data visualization",
        "Use the python implementation of the EAST algorithm",
        "Process images with pillow to feed it to TesseractOCR and AWS Rekognition"
      ]
    },
    {
      job: "Frontend developer",
      where: "Unkafi",
      date: "10/2020 - 10/2022",
      completed_tasks: [
        "Designing the application flow using ReactRouter",
        "Development of a centralized state management using react native",
        "Fixing native library problems inside Objective C and Java"
      ]
    },
    {
      job: "Programming Mentor",
      where: "Tecbot 3158 - Tec Toluca Robotics Team",
      date: "08/2018 - 06/2019",
      completed_tasks: [
        "Tracking targets using python OpenCV libraries",
        "Analyze information using python ml libraries",
        "Work on autonomous periods for the robot of the season",
        "Design and implement the code to teleoperate the robot"
      ]
    }
  ]

  const onDocumentLoadSuccess=(numPages)=>{
    setNumPages(numPages);
  }
  return (
    <div className="cv-page">
      <img alt="header" className="header-image" src={headerImage}/>
      <div className='name'>
          <Typography sx={{color: "white", fontSize: "4rem"}} variant="h5" component="div">
              CV
          </Typography>
      </div>
      <div className="cv-body">
        <div className='section-title'>
          <Typography sx={{color: "black", fontSize: "2rem"}} variant="h5" component="div">
            Work experience
          </Typography>
        </div>
        <ul className='work-experience-list'>
          {
            work_experience.map(item =>
              (  
                <li className='cv-item'>
                  <div className="title">{item.job}</div>
                  <div className="where">
                    <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.where}
                        </Typography>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {" ("+item.date + ")"}
                        </Typography>
                    </React.Fragment>
                  </div>
                    {item.completed_tasks.map(task=>
                      ( 
                        <div className='task'>
                          <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {task}
                          </Typography>
                        </div>
                       )
                    )}
                </li>
              )
            )
          }
        </ul>
      </div>
    </div>
  );
  }
  
export default CVPage;