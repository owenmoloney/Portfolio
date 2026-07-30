import React, {useContext, useState} from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const experiences = workExperiences.experience || [];
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(() => new Set([0]));

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

  const renderDetails = card => (
    <div className="experience-detail-body">
      <h5
        className={
          isDark ? "experience-text-role dark-mode-text" : "experience-text-role"
        }
      >
        {card.role}
      </h5>
      <h5
        className={
          isDark ? "experience-text-date dark-mode-text" : "experience-text-date"
        }
      >
        {card.date}
      </h5>
      <p
        className={
          isDark
            ? "subTitle experience-text-desc dark-mode-text"
            : "subTitle experience-text-desc"
        }
      >
        {card.desc}
      </p>
      {card.descBullets && (
        <ul className="experience-detail-bullets">
          {card.descBullets.map((item, i) => (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (!workExperiences.display) {
    return null;
  }

  const selected = experiences[activeTab];

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>

            <div className="experience-tabs-desktop">
              <div
                className="experience-tabs"
                role="tablist"
                aria-label="Work experience"
              >
                {experiences.map((card, i) => (
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
                    <img
                      className="experience-tab-logo"
                      src={card.companylogo}
                      alt=""
                    />
                    <span className={isDark ? "dark-mode-text" : ""}>
                      {card.company}
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
              {experiences.map((card, i) => {
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
                      <img
                        className="experience-tab-logo"
                        src={card.companylogo}
                        alt=""
                      />
                      <span className={isDark ? "dark-mode-text" : ""}>
                        {card.company}
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
                        {renderDetails(card)}
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
