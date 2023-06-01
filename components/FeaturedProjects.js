/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';
import React from 'react';

export default function FeaturedProjects({ newest_projects }) {
  return (
    <section id="projects" className="featured-projects flex flex-col">
      <h4 className=" text-2xl font-bold font-poppins">Featured Projects</h4>
      <div className="newest-projects flex flex-col">
        {newest_projects.map((item) => (
          <div className="featured-item flex" key={item._id}>
            <div className="item-image">
              <img src={item.imgUrl} alt={item.name} />
            </div>
            <div className="item-content flex flex-col">
              <div className="itext-texts flex flex-col">
                <h5 className=" text-lg font-semibold font-poppins">
                  {item.name}
                </h5>
                <p className=" text-sm font-normal font-inter">
                  {item.description}
                </p>
              </div>
              <div className="tools-used flex flex-wrap">
                {item.tools.map((tool, index) => (
                  <div className="tool-box" key={index}>
                    <p className=" text-xs font-medium font-inter">{tool}</p>
                  </div>
                ))}
              </div>
              <div className="item-buttons flex">
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <Icon icon="ri:github-line" />
                </a>
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    <button>
                      <span className=" text-lg font-medium font-inter">
                        Launch
                      </span>
                      <Icon icon="ph:arrow-up-right-bold" />
                    </button>
                  </a>
                )}
                {item.design && (
                  <a
                    href={item.design}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <span className=" text-lg font-medium font-inter">
                        Design
                      </span>
                      <Icon icon="ph:arrow-right-bold" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <button type="button" className="all-projects flex">
          <span className=" text-lg font-semibold font-inter">
            All Projects
          </span>
          <Icon icon="ph:arrow-right-bold" />
        </button>
      </a>
    </section>
  );
}
