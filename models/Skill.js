import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
export default Skill;
