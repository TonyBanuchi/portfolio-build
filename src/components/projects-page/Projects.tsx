// Style Imports
import styles from './Projects.module.scss'

function Projects(){
  return (
    <>
    <section id="projects">
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/tributePage"
      className={`${styles['project-link']}`}>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Tribute Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/surveyForm"
      className={`${styles['project-link']}`}>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Survey Form</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/technicalDocumentationPage"
      className={`${styles['project-link']}`}>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Technical Documentation Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/productLandingPage"
      className={`${styles['project-link']}`}>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Product Landing Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/personalPortflio"
      className={`${styles['project-link']}`}>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Portfolio Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master" className={`${styles['projects-link']}`} id="link-to-all">
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>See All ... </h2>
      </div>
    </a>
  </section>
  </>
  )
}

export default Projects;