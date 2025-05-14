import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShopEvent } from '@/types/shopEvent.types';
import moment from 'moment';
import { formatKey } from '@/utils/formatKey';

const EventDetails = ({ event }: { event: ShopEvent }) => {
  const dateKeys = ['startTime', 'endTime'];
  const keysToRender: (keyof ShopEvent)[] = [
    'name',
    'description',
    'startTime',
    'endTime',
    'paymentInformation',
  ];

  return (
    <Card className=" min-h-[100vh] md:min-h-min">
      <CardHeader>
        <CardTitle>EVENT DETAILS</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-12">
        {keysToRender.map((key) => {
          const value = event[key];

          const displayValue = dateKeys.includes(key)
            ? moment(value.toString()).format('L')
            : value;
          return (
            <div key={key}>
              <div className="dark:text-white/70">{formatKey(key)}</div>
              <div className="ml-2 text-lg">{displayValue}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default EventDetails;
