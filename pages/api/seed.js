import Project from '../../models/Project';
import Skill from '../../models/Skill';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Skill.deleteMany();
  await Skill.insertMany(data.tools);
  await Project.deleteMany();
  await Project.insertMany(data.projects);
  await db.disconnect();
  res.send({ message: 'Seeded successfully ' });
};

export default handler;
