import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import School from '@mui/icons-material/School';
import QueryStats from '@mui/icons-material/QueryStats';
import CloudSync from '@mui/icons-material/CloudSync';

import '@fontsource/roboto/300.css';

import headerImage from "../images/home_image3.jpg"

import "../styles/HomePage.css"
import aboutme from "../icons/aboutme.jpeg"

const iconsSize = 70

function HomePage() {
    return (
      <div className='homepage'>
        <img alt="header" className="header-image" src={headerImage}/>
        
        <div className='name'>
            <Typography sx={{color: "white", fontSize: "5rem", fontFamily:"Aliens"}} variant="h5" component="div">
                Sergio André López Pereo
            </Typography>
        </div>
        <div className='biography'>
            <div className="text-paper">
                <Card sx={{ width: 400, height: 270 }}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent sx={{height: "100%"}}>
                            <div className='icon-skill'>
                                <School sx={{fontSize: iconsSize}}/>
                            </div>
                            <Typography sx={{textAlign: "center", fontSize: 30}} variant="body2" color="text.secondary">
                                Estudiante de la licenciatura en ciencia de datos
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            
            <div className="text-paper">
                <Card sx={{ width:  400, height: 270 }}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent sx={{height: "100%"}}>
                            <div className='etl-skill'>
                                <CloudSync sx={{fontSize: iconsSize}}/>
                            </div>
                            <Typography sx={{textAlign: "center", fontSize: 30}} variant="body2" color="text.secondary">
                                Desarrollo de ETL's
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            
            <div className="text-paper">
                <Card sx={{ width: 400, height: 270 }}>
                    <CardActionArea sx={{width: "100%", height: "100%"}}>
                        <CardContent sx={{height: "100%"}}>
                            <div className='dist-skill'>
                                <QueryStats sx={{fontSize: iconsSize}}/>
                            </div>
                            <Typography sx={{textAlign: "center", fontSize: 30}} variant="body2" color="text.secondary">
                                Análisis y visualización de datos
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
        <div class="about-me">
            <div class="about-me-txts">
                <h2 className='about-me-title'>
                    Acerca de mí
                </h2>
                <p className="about-me-text">
                    Soy estudiante de la carrera de ciencia de datos en el ITAM. Soy un apasionado de los datos. Me encanta realizar análisis y hacer modelos.
                    Pero para hacerlo, claramente, necesito hacerme de estos datos. Esto me ha llevado a acercarme a realizar herramientas para su obtención.
                    He realizado pipelines de datos que incluyen sistemas ETL en diversas herramientas. Últimamente he estado trabajando mucho con Python pero siempre
                    trato de probar funcionalidades de múltiples lenguajes para tener un marco más amplio de herramientas y usar las que sean idóneas para mis proyectos.
                </p>
                <p className="about-me-text">
                    Entre mis proyectos más recientes esta el diseño e implementación de un sistema de extracción, análisis y visualización.
                    Este sistema es un ETL financiero que nos permite sacar análisis exploratorios generales sobre la economía de un mercado virtual.
                    Nos permite ver gráficas sobre el PIB, CIP y funciones de demandas
                    de productos sobre la economía. Usa múltiples bases de datos para poder hacer una mejor representación de los datos y facilitar dichos
                    análisis.
                </p>
                <p className="about-me-text">
                    Otro de ellos se realizo junto con Centro ITAM para Datos + Algoritmos + Sociedad para el proyecto periodismo silenciado. 
                    Aquí se realizaron múltiples desarrollos. El más destacable es un sistema, al igual que el anterior, ETL que nos permite obtener una capa 
                    de abstracción sobre con conjunto de datos en particular. Esta capa esta hecha utilizando herramientas como Spark, AWS y Dash. 
                    Esta capa de abstracción nos permite interactuar y hacer análisis exploratorios sencillos sin necesidad de preocuparse
                    por los aspectos más técnicos del sistema. Esto le permite a personas no tan familizarizas con la programación 
                    conectar de una mejor manera con estos datos. Es un sistema todavía en desarrollo y se espera seguirlo trabajando el siguiente semestre para
                    poder tener un marco de desarrollo para diversos proyectos en el centro.
                </p>
            </div>
            <div class="about-me-image-container">
                <img class="about-me-image" alt="Remy Sharp" src={aboutme} />
            </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;