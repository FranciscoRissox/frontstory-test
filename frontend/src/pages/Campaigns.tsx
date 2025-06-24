import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CampaignsTable from "../components/CampaignsTable";
import { api, type Campaign, type NewCampaign } from "../api";
import { CampaignForm } from "../components/CampaignForm";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await api.getCampaigns();
      setCampaigns(response);
    };
    fetchCampaigns();
  }, []);

  const handleAddCampaign = async (campaign: NewCampaign) => {
    const response = await api.addCampaign(campaign);
    setCampaigns([...campaigns, response]);
  };

  const handleDelete = async (id: number) => {
    await api.deleteCampaign(id);
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
  };

      return <div>
      <Flex mb={4}>
        <Heading>Campaigns</Heading>
        <Spacer />
        <CampaignForm addCampaign={handleAddCampaign}/>
      </Flex>
      <CampaignsTable campaigns={campaigns} handleDelete={handleDelete}/>
      
    </div>;
  };
  
  export default Campaigns;