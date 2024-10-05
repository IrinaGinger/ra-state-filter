import { ProjectItem } from './ProjectItem';

export const ProjectList = (props) => {
    const projects = props.projects;
    let column1 = [];
    let column2 = [];
    let column3 = [];

    projects.forEach((project, index) => {
        if (index % 3 === 0) {
            column1.push(project);
        } else if (index % 3 === 1) {
            column2.push(project);
        } else {
            column3.push(project);
        }
    })

    return (
        <div className="gallery">
            <div className="column">
                {column1.map((project, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            src={project.img}
                        />
                    );
                })}
            </div>
            <div className="column">
                {column2.map((project, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            src={project.img}
                        />
                    );
                })}
            </div>
            <div className="column">
                {column3.map((project, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            src={project.img}
                        />
                    );
                })}
            </div>
        </div>
    );
}