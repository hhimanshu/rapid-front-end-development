import React from 'react';
import { ApiStatusView } from '../components/ApiStatusView';
import { isHostLocal, isHostProduction } from '../api/constants';
import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons';

export const ApiStatus = () => {
  const host = isHostLocal
    ? 'local'
    : isHostProduction
    ? 'production'
    : 'staging';

  const status = isHostLocal ? 'error' : 'success';
  const icon = isHostLocal ? <WarningTwoIcon /> : <CheckCircleIcon />;
  const message = `Your APIs are connected to ${host}`;

  return <ApiStatusView message={message} status={status} icon={icon} />;
};
