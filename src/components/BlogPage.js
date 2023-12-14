import * as React from 'react';
import headerImage from "../images/home_image4.jpeg";
import Typography from '@mui/material/Typography';
import raw1 from "../images/raw1.jpg";
import raw2 from "../images/raw2.jpg";
import output1 from "../images/output1.jpeg";
import output2 from "../images/output2.jpeg";

import "../styles/BlogPage.css";


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

        <div class="blog-container">
            <p className="about-me-text">
                Esta automatización se hizo porque en uno de los proyectos den Centro de Datos nos encontramos con la siguiente problemática.
                Se debía rescatar la mayor cantidad de información de un conjunto de imágenes. Para hacer esto, en primera instancia, se
                hizo un análisis usando AWS Rekognition. Sin embargo, Rekognition solo podía extraer como "tags" que la imagen contenía texto.
                Para solventar esto y ayudarle a la plataforma a extraer los textos de las imágenes se decidió hacer un preprocesamiento de las mismas.
                Y para hacerlo se utilizo el algoritmo EAST (Efficient and Accurate Scene Text Detector).
            </p>
            <p className="about-me-text">
                Para hacerlo se utilizo una re-implementación hecha por <a href='https://github.com/argman/EAST'>argman</a> en tensorflow.
                Se tuvo que modificar esta implementación para trabajar hacer un workflow distinto con las imagenes. Simplemente se creo un
                nuevo archivo llamado "east_from_folder" que se puede encontrar en mi <a href='https://github.com/SergioPereo/east-test/'>repositorio</a>.
                Se creo una nueva carpeta llamada "images" en la cuál se tenían que poner las imagenes y el script se encargaba de procesar dichas images
                usando la interfaz que nos proporcionó argman. LaS imagenes que se muestran abajo son imagenes que se introdujeron en dicha carpeta.
            </p>
            <div className="image-container">
              <img className="exp-image" src={raw1}/>
              <img className="exp-image" src={raw2}/>
            </div>
            <p className="about-me-text">
                Dichas imagenes las proceso el algoritmo y hizo la correcta detección de cada una de ellas como se puede ver en las siguientes imagenes.
            </p>
            <div className="image-container">
              <img className="exp-image" src={output1}/>
              <img className="exp-image" src={output2}/>
            </div>
          </div>
      </div>
    </div>
  );
  }
  
export default BlogPage;