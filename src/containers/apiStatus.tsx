import React from 'react';
import { ApiStatusView } from '../components/ApiStatusView';
import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { isHostLocal, isHostProduction } from '../openapi/constants';

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
