// src/routes/plan.routes.js
const express = require('express');
const router = express.Router();
const upload = require('../config/cloudinary');
const planController = require('../controllers/plan.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/upload', authMiddleware, upload.single('file'), planController.uploadAndGeneratePlan);
router.get('/plans', authMiddleware, planController.getAllPlans);
router.delete('/plans/:id', authMiddleware, planController.deletePlan);
router.patch('/plan/:planId/section/:sectionId', authMiddleware, planController.updateSection);
router.get('/plan/:planId/section/:sectionId/download', authMiddleware, planController.downloadSection);

module.exports = router;
