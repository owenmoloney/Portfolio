import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const projects = bigProjects.projects || [];
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(() => new Set([0]));

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const toggleAccordion = index => {
    setOpenAccordion(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const renderSectionTitle = title => (
    <h6
      className={
        isDark
          ? "project-section-title dark-mode-text"
          : "project-section-title"
      }
    >
      {title}
    </h6>
  );

  const renderDetails = project => (
    <div className="experience-detail-body">
      <h5
        className={
          isDark ? "experience-text-role dark-mode-text" : "experience-text-role"
        }
      >
        {project.name}
      </h5>
      {project.subtitle ? (
        <p
          className={
            isDark
              ? "project-case-subtitle dark-mode-text"
              : "project-case-subtitle"
          }
        >
          {project.subtitle}
        </p>
      ) : null}
      {project.date ? (
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {project.date}
        </h5>
      ) : null}

      <div className="project-section">
        {renderSectionTitle("Short Description")}
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {project.desc}
        </p>
      </div>

      {project.technologies ? (
        <div className="project-section">
          {renderSectionTitle("Technologies")}
          <p
            className={
              isDark
                ? "subTitle project-tech-stack dark-mode-text"
                : "subTitle project-tech-stack"
            }
          >
            {project.technologies.join(" | ")}
          </p>
        </div>
      ) : null}

      {project.engineeringConcepts ? (
        <div className="project-section">
          {renderSectionTitle("Key Engineering Concepts")}
          <ul className="project-concept-list">
            {project.engineeringConcepts.map((concept, i) => (
              <li
                key={i}
                className={
                  isDark
                    ? "project-concept-item dark-mode-text"
                    : "project-concept-item"
                }
              >
                <span className="project-concept-check" aria-hidden="true">
                  ✓
                </span>
                {concept}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.whyBuilt ? (
        <div className="project-section">
          {renderSectionTitle("Why I Built It")}
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {project.whyBuilt}
          </p>
        </div>
      ) : null}

      {project.futureApplications ? (
        <div className="project-section">
          {renderSectionTitle("Future Applications")}
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {project.futureApplications}
          </p>
        </div>
      ) : null}

      {project.descBullets ? (
        <ul className="experience-detail-bullets">
          {project.descBullets.map((item, i) => (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {(project.github || project.demo) && (
        <div className="project-links">
          {project.github ? (
            <span
              className={isDark ? "dark-mode project-tag" : "project-tag"}
              onClick={() => openUrlInNewTab(project.github)}
            >
              View on GitHub
            </span>
          ) : null}
          {project.demo ? (
            <span
              className={isDark ? "dark-mode project-tag" : "project-tag"}
              onClick={() => openUrlInNewTab(project.demo)}
            >
              Visit Website
            </span>
          ) : null}
        </div>
      )}
    </div>
  );

  if (!bigProjects.display) {
    return null;
  }

  const selected = projects[activeTab];

  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="personalProjects">
          <div>
            <h1 className="experience-heading">{bigProjects.title}</h1>
            {bigProjects.subtitle ? (
              <p
                className={
                  isDark
                    ? "dark-mode project-subtitle"
                    : "subTitle project-subtitle"
                }
              >
                {bigProjects.subtitle}
              </p>
            ) : null}

            <div className="experience-tabs-desktop">
              <div
                className="experience-tabs project-tabs"
                role="tablist"
                aria-label="Personal projects"
              >
                {projects.map((project, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === i}
                    className={[
                      "experience-tab",
                      activeTab === i ? "experience-tab-active" : "",
                      isDark ? "experience-tab-dark" : ""
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setActiveTab(i)}
                  >
                    {project.image ? (
                      <img
                        className="experience-tab-logo"
                        src={project.image}
                        alt=""
                      />
                    ) : (
                      <span
                        className="experience-tab-logo project-tab-initial"
                        aria-hidden="true"
                      >
                        {project.name.charAt(0)}
                      </span>
                    )}
                    <span className={isDark ? "dark-mode-text" : ""}>
                      {project.name}
                    </span>
                  </button>
                ))}
              </div>
              {selected && (
                <div
                  className={
                    isDark
                      ? "experience-detail-panel experience-detail-panel-dark"
                      : "experience-detail-panel"
                  }
                  role="tabpanel"
                >
                  {renderDetails(selected)}
                </div>
              )}
            </div>

            <div className="experience-accordion-mobile">
              {projects.map((project, i) => {
                const isOpen = openAccordion.has(i);
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "experience-accordion-item experience-accordion-item-dark"
                        : "experience-accordion-item"
                    }
                  >
                    <button
                      type="button"
                      className={[
                        "experience-accordion-header",
                        isOpen ? "experience-accordion-header-open" : ""
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(i)}
                    >
                      {project.image ? (
                        <img
                          className="experience-tab-logo"
                          src={project.image}
                          alt=""
                        />
                      ) : (
                        <span
                          className="experience-tab-logo project-tab-initial"
                          aria-hidden="true"
                        >
                          {project.name.charAt(0)}
                        </span>
                      )}
                      <span className={isDark ? "dark-mode-text" : ""}>
                        {project.name}
                      </span>
                      <span
                        className={
                          isOpen
                            ? "experience-accordion-chevron open"
                            : "experience-accordion-chevron"
                        }
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="experience-accordion-panel">
                        {renderDetails(project)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
