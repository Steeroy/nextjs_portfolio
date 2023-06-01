import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    tools: { type: Array, required: true },
    github: { type: String, required: true },
    demo: { type: String, required: false },
    design: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;
