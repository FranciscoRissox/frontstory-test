import {
  Flex,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import {
  useEffect,
  useState
} from "react";
import {
  api,
  type Campaign
} from "../api";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const COLORS = [
  "#3182CE",
  "#2B6CB0",
  "#63B3ED",
  "#90CDF4"
];

const formatData = (campaigns: Campaign[]) => {
  return campaigns.map(c => ({
    name: c.name,
    value: c.revenue-c.cost
  }));
};

const formatDataClicks = (campaigns: Campaign[]) => {
  return campaigns.map(c => ({
    name: c.name,
    value: c.clicks
  }));
};

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await api.getCampaigns();
      setCampaigns(response);
    };
    fetchCampaigns();
  }, []);

  return (
    <div>
      <Flex mb={4}>
        <Heading>Dashboard</Heading>
      </Flex>

      <SimpleGrid columns={2} gap={4}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
        <Text>Campaigns by profit</Text>
        <PieChart width={300} height={300}>
          <Pie
            data={formatData(campaigns)}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label // ← enables default label
          >
            {formatData(campaigns).map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
                
        </Flex>
        <Flex direction={"column"} justify={"center"} align={"center"}>
        <Text>Campaigns by clicks</Text>
          <BarChart width={500} height={300} data={formatDataClicks(campaigns)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3182CE" />
          </BarChart>
          
        </Flex>
      </SimpleGrid>

    </div>
  );
};

export default Dashboard;