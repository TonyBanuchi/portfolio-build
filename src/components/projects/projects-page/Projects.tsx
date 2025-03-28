// Style Imports
import styles from './Projects.module.scss'

function Projects(){
  return (
    <>
    <h1 className={styles.title}>Project Repositories</h1>
    <section id="projects">
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>freeCodeCamp Certification Projects</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/tributePage"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Tribute Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/surveyForm"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Survey Form</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/technicalDocumentationPage"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Technical Documentation Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/productLandingPage"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Product Landing Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/personalPortfolio"
      className={`${styles['project-link']}`} target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>Portfolio Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi?tab=repositories" className={`${styles['projects-link']}`} id="link-to-all"  target='_blank'>
      <div className={`${styles['project-tile']}`}>
        <h2 className={`${styles['project-name']}`}>See All ... </h2>
      </div>
    </a>
  </section>
  </>
  )
}

export default Projects;