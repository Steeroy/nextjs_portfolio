/* eslint-disable @next/next/no-img-element */
import React from 'react';
import db from '../utils/db';
import Project from '../models/Project';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export async function getServerSideProps() {
  await db.connect();
  const all_projects = await Project.find().sort({ createdAt: -1 }).lean();

  return {
    props: {
      all_projects: all_projects.map(db.convertDocToObj),
    },
  };
}

function allprojects({ all_projects }) {
  return (
    <section className="allprojects-container flex flex-col gap-4">
      <Link href="/">
        <button className="all-projects-button">
          <Icon icon="ph:arrow-left-bold" />
          <span className="text-2xl font-semibold font-inter">Home</span>
        </button>
      </Link>
      <div className="back-all flex flex-col gap-4 align-middle">
        <h2 className="text-2xl font-bold font-poppins">All Projects</h2>
        <div className="main-section flex flex-col lg:flex-row flex-wrap w-full">
          {all_projects.map((item) => (
            <div className="featured-item flex lg:w-6/12 mb-5" key={item._id}>
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
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="ri:github-line" />
                  </a>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      </div>
    </section>
  );
}

export default allprojects;
