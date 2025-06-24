import { NavLink } from 'react-router-dom';
import { Box, VStack, Link, Icon, Text } from '@chakra-ui/react';
import { MdDashboard, MdCampaign } from 'react-icons/md';

const SidebarLink = ({ icon, to, children }: { icon: any; to: any; children: any }) => {
  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    paddingY: 2,
    paddingX: 4,
    borderRadius: 'md',
    color: 'gray.700',
    _hover: {
      bg: 'gray.200',
    },
    transition: 'background-color 0.2s',
  };

  const activeLinkStyles = {
    bg: 'gray.800',
    color: 'white',
    _hover: {
      bg: 'gray.700',
    },
  };

  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Link
          as="div"
          style={{ textDecoration: 'none' }}
          {...(isActive ? { ...linkStyles, ...activeLinkStyles } : linkStyles)}
        >
          <Icon as={icon} mr={3} w={5} h={5} />
          <Text fontWeight="medium">{children}</Text>
        </Link>
      )}
    </NavLink>
  );
};
const Sidebar = () => {
  return (
    <Box
      as="aside"
      position="fixed"
      left={0}
      w={{ base: '10vw', md: '15vw' }}
      bg="gray.100"
      p={4}
      borderRight="1px"
      borderColor="gray.200"
      zIndex={2}
      top={10}
      height="100vh"
    >
      <VStack align="stretch" spacing={1}>
        <SidebarLink to="/dashboard" icon={MdDashboard}>
          Dashboard
        </SidebarLink>
        <SidebarLink to="/campaigns" icon={MdCampaign}>
          Campaigns
        </SidebarLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;