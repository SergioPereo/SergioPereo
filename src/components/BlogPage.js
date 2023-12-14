import * as React from 'react';
import headerImage from "../images/home_image4.jpeg";
import Typography from '@mui/material/Typography';
import raw1 from "../images/raw1.jpg";
import raw2 from "../images/raw2.jpg";
import output1 from "../images/output1.jpeg";
import output2 from "../images/output2.jpeg";
import tesseract_output from "../images/tesseract_output.png"
import final_word_cloud from "../images/final_word_cloud.jpeg";

import "../styles/BlogPage.css";


function BlogPage() {

  return (
    <div className="blog-page">
      <img alt="header" className="blog-header-image" src={headerImage}/>
      <div className='name'>
          <Typography sx={{color: "white", fontSize: "4rem", fontFamily:'Aliens'}} variant="h5" component="div">
              Automatización de detección de campos de texto
          </Typography>
      </div>
      <div className="blog-body">

        <div class="blog-container">
            <p className="about-me-text">
                Esta automatización se hizo porque en uno de los proyectos del Centro de Datos nos encontramos con la siguiente problemática:
            </p>
            <p className="about-me-text">
                Se debía rescatar la mayor cantidad de información de un conjunto de imagenes. Para hacer esto, se
                hizo un análisis usando AWS Rekognition y Tesseract. Ninguna de las dos herramientas lograba sacar los textos de las imagenes.
                Eso se debía a que había mucho "ruido" en ellas por lo que les era difícil separar y extraer los textos.
                Para solventar esto se decidió hacer un preprocesamiento de las mismas.
                Este procesamiento debía ser capaz de separar los campos de texto de las imagenes. Para hacerlo se utilizo el algoritmo EAST 
                (Efficient and Accurate Scene Text Detector).
            </p>
            <p className="about-me-text">
                Se utilizo una re-implementación hecha por <a href='https://github.com/argman/EAST'>argman</a> en tensorflow.
                Se tuvo que modificar esta implementación para hacer un workflow distinto con las imagenes. Simplemente se creo un
                nuevo archivo llamado "east_from_folder.py" que se puede encontrar en mi <a href='https://github.com/SergioPereo/east-test/'>repositorio</a>.
                Se creo una nueva carpeta llamada "images" en la cuál se tenían que poner las imagenes y el script se encargaba de procesarlas
                utilizando algunas interfaces hechas por argman. Abajo se muestran un par de ellas:
            </p>
            <div className="image-container">
              <img className="exp-image" src={raw1}/>
              <img className="exp-image" src={raw2}/>
            </div>
            <p className="about-me-text">
                Este fue el resultado que nos arrojo el algoritmo:
            </p>
            <div className="image-container">
              <img className="exp-image" src={output1}/>
              <img className="exp-image" src={output2}/>
            </div>
            <p className="about-me-text">
              Se puede apreciar la íncreible precisión que tiene. Tampoco requirió de ningún entrenamiento previo y es un algoritmo que usa una única
              red neuronal. También tiene buenos rendimientos en imagenes con ambientes y escenarios más complejos. Los autores explican con mucho más detalle su implementación y cómo logran
              este rendimiento en su <a href='https://arxiv.org/abs/1704.03155v2'>paper</a>. Definitivamente es un trabajo que vale mucho la pena leer.
              Sobre todo si tu área de especialización es la visión computarizada.
            </p>
            <p className="about-me-text">
              Volviendo al desarrollo, las imagenes fueron después procesadas utilizando Pillow y los "boundings" de los textos generados por el algoritmo para recortar las imagenes.
              Los textos de estos recortes se intentaron extraer de dos maneras. La primera fue usando Tesseract, el OCR de Google, lamentablemente 
              no dió los resultados esperados. Incluso después de ese preprocesamiento Tesseract arrojaba resultados bastante malos.
              Aunque no se le puede atribuir este fracaso unicamente a Tesseract. Por lo que pudimos investigar, esta herramienta funciona
              mucho mejor cuando se hace un pre-entrenamiento inicial con las imagenes. 
              Adjunto abajo los resultados arrojados por Tesseract para la segunda imagen:
            </p>
            <div className="image-container">
              <img className="exp-image" src={tesseract_output}/>
            </div>
            <p className="about-me-text">
               Aunque queríamos seguir explorando un poco más Tesseract teníamos una fecha de entrega un poco ajustada. Por esto, decidimos
               usar Rekognition para hacer la extracción final de dichos textos. Tuvo un mejor rendimiento para esta tarea. Pero debido
               a como estaba planteado el pipeline de datos, estos datos se combinaron con el resto de features extraídos de estas y muchas
               otras imagenes extraídas de múltiples fuentes. Y aunque no puedo mostrar los datos finales únicamente de Rekognition esta es una de las imagenes
               hechas para visualización.
            </p>
            <div className="image-container">
              <img id='word-cloud' src={final_word_cloud}/>
            </div>
            <p className="about-me-text">
              Como conclusión podríamos decir que en este caso Rekognition tuvo un mejor rendimiento que Tesseract. Pero no siempre es ese el caso.
              Puede que con una mejor preparación le hubieramos podido sacar un mejor rendimiento a la herramienta de Google. E independientemente
              de cuál fuera la mejor, ambas tenían problemas para extraer estos textos por sí solas. Esto puede deberse a la generalización de los algoritmos
              que tienen ambas. Es más probable que si se puede especializar dicho algoritmo a la tarea que estas realizando, este pueda funcionar mejor.
              También se puede llegar a mejores resultados si simplificas el entorno de las imagenes. Esto le facilita a los algoritmos de reconocimiento
              detectar y extraer correctamente los textos.
            </p>
          </div>
      </div>
    </div>
  );
  }
  
export default BlogPage;