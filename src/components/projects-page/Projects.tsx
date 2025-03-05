// Style Imports
import './Projects.scss'

function Projects(){
  return (
    <>
    <section id="projects">
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/tributePage"
      className="project-link">
      <div className="project-tile">
        <h2 className="project-name">Tribute Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/surveyForm"
      className="project-link">
      <div className="project-tile">
        <h2 className="project-name">Survey Form</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/technicalDocumentationPage"
      className="project-link">
      <div className="project-tile">
        <h2 className="project-name">Technical Documentation Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/productLandingPage"
      className="project-link">
      <div className="project-tile">
        <h2 className="project-name">Product Landing Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master/responsiveWebDesign/personalPortflio"
      className="project-link">
      <div className="project-tile">
        <h2 className="project-name">Portfolio Page</h2>
      </div>
    </a>
    <a href="https://github.com/TonyBanuchi/freeCodeCamp-Projects/tree/master" className="projects-link" id="link-to-all">
      <div className="project-tile">
        <h2 className="project-name">See All ... </h2>
      </div>
    </a>
  </section>
  </>
  )
}

export default Projects;