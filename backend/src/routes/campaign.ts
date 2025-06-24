import { Router } from 'express';
import { CampaignController } from '../controller/campaign';

const router = Router();
const campaignController = new CampaignController();

router.get('/', campaignController.getCampaigns);
router.post('/', campaignController.addCampaign);
router.delete('/:id', campaignController.deleteCampaign);

export default router;
