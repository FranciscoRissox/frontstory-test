import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Campaign } from '../entity/campaign';

export class CampaignController {

    private campaignRepository = AppDataSource.getRepository(Campaign);

    getCampaigns = async (req: Request, res: Response) => {
        try {
            const result = await this.campaignRepository.find();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error fetching campaigns", error });
        }
    }

    addCampaign = async (req: Request, res: Response) => {
        try {
            const campaign = this.campaignRepository.create(req.body);
            const results = await this.campaignRepository.save(campaign);
            res.status(201).json(results);
        } catch (error) {
            res.status(500).json({ message: "Error adding campaign", error });
        }
    }

    deleteCampaign = async (req: Request, res: Response) => {
        try {
            const results = await this.campaignRepository.delete(req.params.id);
            if (results.affected === 0) {
                res.status(404).json({ message: "Campaign not found" });
            }
            res.status(200).json({ message: "Campaign deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting campaign", error });
        }
    }
}
