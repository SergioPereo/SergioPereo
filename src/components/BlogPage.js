import * as React from 'react';
import headerImage from "../images/home_image4.jpg"
import Typography from '@mui/material/Typography';
import "../styles/BlogPage.css"


function BlogPage() {

  return (
    <div className="blog-page">
      <img alt="header" className="blog-header-image" src={headerImage}/>
      <div className='name'>
          <Typography sx={{color: "white", fontSize: "4rem"}} variant="h5" component="div">
              Automatización de detección de campos de texto
          </Typography>
      </div>
      <div className="blog-body">

        <div class="about-me-txts">
            <p className="about-me-text">
                Esta entrada de blog explica el c
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
                de abstracción sobre datos crudos. Esta capa esta hecha utilizando herramientas como Spark, AWS y Dash. Este sistema nos permite conectar mejor 
                con los datos y hacer análisis exploratorios sin necesidad de preocuparnos por aspectos tan técnicos. Es un sistema todavía en desarrollo y se
                espera seguirlo trabajando el siguiente semestre para poder tener un marco de desarrollo para diversos proyectos en el centro.
            </p>
          </div>
      </div>
    </div>
  );
  }
  
export default BlogPage;