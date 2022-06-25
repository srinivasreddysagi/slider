import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";

function Slider() {
    return (
        <div className="projects__show-project">
            <h4>Clipboard landing page</h4>
            <p>
                A beautiful and responsive webpage using flex layout containing
                few individual sections
            </p>
            <div className="links-wrapper">
                <a
                    href="https://github.com/srinivasreddysagi/clipboard-landing-page-master/"
                    target="_blank" rel="noreferrer"
                >
                    Code
                    <HiOutlineCode></HiOutlineCode>
                </a>
                <a
                    href="https://niv-frontend.netlify.app/clipboard-landing-page-master/"
                    target="_blank" rel="noreferrer"
                >
                    Visit
                    <BiLinkAlt />
                </a>
            </div>
        </div>
    );
}

export default Slider;
