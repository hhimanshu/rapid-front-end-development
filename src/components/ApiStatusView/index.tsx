import React from 'react';
import { Alert, AlertTitle, Box } from '@chakra-ui/react';

interface ApiStatusViewProps {
  message: string;
  status: 'error' | 'success' | 'info' | 'warning';
  icon: any;
}

export const ApiStatusView = ({
  message,
  status,
  icon,
}: ApiStatusViewProps) => {
  return (
    <Box my={8}>
      <Alert status={status}>
        {icon}
        <AlertTitle ml={2}>{message}</AlertTitle>
      </Alert>
    </Box>
  );
};
