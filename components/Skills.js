/* eslint-disable @next/next/no-img-element */
import React from 'react';

const services = [
  {
    name: 'Frontend<br/>Development',
    content:
      'Modern responsive websites to suit every user device and SEO friendly, with the up to date technologies.',
  },
  {
    name: 'Backend<br/>Development',
    content:
      'Simple yet sophisticated web api calls for your needs. Making your website more dynamic and easy to update.',
  },
  {
    name: 'UI/UX<br/>Designs',
    content:
      'Best modern responsive web designs to make your website more appealing to clients.',
  },
];

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section flex flex-col">
      <div className="services">
        <h5 className=" text-2xl font-bold font-poppins">Services</h5>
        <div className="services-boxes flex align-top justify-between">
          {services.map((item, index) => (
            <div key={index} className="services-item flex flex-col">
              <h6
                className=" text-lg font-semibold font-inter"
                dangerouslySetInnerHTML={{ __html: item.name }}
              />
              <p className=" text-sm font-normal font-inter">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tools flex flex-col">
        <h5 className=" text-2xl font-bold font-poppins">Tools</h5>
        <div className="tools-grid-container">
          {skills.map((item) => (
            <div className="tool-item flex" key={item._id}>
              <div className="img-box">
                <img src={item.imgUrl} alt={item.name} />
              </div>
              <span className=" text-sm font-normal font-inter">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
