const express = require(`express`);
const { pingRouter } = require(`./ping`);
const { assessmentRouter } = require(`./assessment`);
const { userRouter } = require(`./user`);

const router = express.Router();

router.use(`/ping`, pingRouter);
router.use(`/assessment`, assessmentRouter);
router.use(`/user`, userRouter);
// In your backend API route file (e.g., routes/Assessment/index.js)
router.patch(`/:id/delete`, async (req, res) => {
  try {
    const { id } = req.params;
    // Find the assessment by ID and update the 'deleted' field
    const result = await Assessment.update({ deleted: true }, { where: { id } });
    if (result[0] === 0) {
      return res.status(404).json({ message: `Assessment not found` });
    }
    res.status(200).json({ message: `Assessment soft deleted` });
  } catch (error) {
    res.status(500).json({ message: `Error deleting assessment`, error });
  }
});

module.exports = { router };
