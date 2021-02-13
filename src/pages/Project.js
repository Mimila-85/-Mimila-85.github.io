import React from "react";
import projects from "../schemas/projects.json";
import Cards from "../components/Cards";
import { Container } from "../components/Grid";

function Project() {
  return (
    <div className="portfolioBackground">
      <div className="portfolio">
        <Container>
          <Cards projects={projects} />
        </Container>
        {/* <!-- Creator of the background image --> */}
        <span id="imageCredit">
          Photo by{" "}
          <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Markus Spiske
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/1LLh8k2_YFk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
}

export default Project;
