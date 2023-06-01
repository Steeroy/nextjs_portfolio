import Layout from '../components/Layout';
import Project from '../models/Project';
import Skill from '../models/Skill';
import db from '../utils/db';

export default function Home({ skills, newest_projects }) {
  return <Layout skills={skills} newest_projects={newest_projects} />;
}

export async function getServerSideProps() {
  await db.connect();
  const skills = await Skill.find().lean();
  const newest_projects = await Project.find()
    .sort({ createdAt: -1 }) // Sort in descending order based on createdAt
    .limit(4)
    .lean();

  return {
    props: {
      skills: skills.map(db.convertDocToObj),
      newest_projects: newest_projects.map(db.convertDocToObj),
    },
  };
}
