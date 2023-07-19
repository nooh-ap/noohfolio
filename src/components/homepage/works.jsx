import React from "react";
import {faBriefcase, faBuilding} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<FontAwesomeIcon
								icon={faBriefcase}
								className="work-icon"
							/>
							<div className="work-title">Riviera Partners</div>
							<div className="work-subtitle">
								Full Stack Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<FontAwesomeIcon
								icon={faBuilding}
								 className="work-icon"
							/>
							<div className="work-title">Modern Ark</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
