const { Assessment } = require(`../database/models`);
const Sequelize = require(`sequelize`);
import config from 'config';

const {
  database,
  dialect,
  host,
  password,
  username,
} = config.get(`database`);

// Create Sequelize instance
const sequelize = new Sequelize(database, username, password, { dialect, host });

exports.submit = async (assessment) => {
  try {
    await sequelize.authenticate();
    const newAssessment = await Assessment.create({
      catDateOfBirth: assessment.catDob,
      catName: assessment.catName,
      createdAt: new Date(),
      instrumentType: 1,
      riskLevel: assessment.risk,
      score: assessment.score,
      updatedAt: new Date(),
    });
    return newAssessment;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Unable to create assessment:`, error);
    throw error;
  }
};

exports.getList = async () => {
  try {
    await sequelize.authenticate();
    const assessments = await Assessment.findAll({
      where: { deletedAt: null },
    });
    // eslint-disable-next-line no-console
    console.log(assessments);
    return assessments;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Unable to fetch assessments:`, error);
    throw error;
  }
};

exports.softDelete = async (assessmentId) => {
  try {
    await sequelize.authenticate();
    const result = await Assessment.update(
      { deletedAt: new Date() },
      { where: { id: assessmentId } },
    );
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Unable to delete assessment:`, error);
    throw error;
  }
};
