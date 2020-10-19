import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ClosedText, ClosedWeekendCard, InfoCard, InfoText, OpenText, OpenWeekendCard } from './styles';
import { SemiBold } from '../../fonts';
import { Card } from '../../@types/types';


export default function ScheduleCard({ typeCard, hours }: Card): JSX.Element {
      switch (typeCard){
          case 'info':
            return(
                    <InfoCard>
                        <Feather name="clock" size={40} color="#2AB5D1" />
                        <InfoText style={SemiBold}>{hours}</InfoText>
                    </InfoCard>
            );
            case 'open':
            return(
                    <OpenWeekendCard>
                        <Feather name="info" size={40} color="#39CC83" />
                        <OpenText style={SemiBold}>Atendemos fim de semana</OpenText>
                    </OpenWeekendCard>
            );
            case 'closed':
            return(
                    <ClosedWeekendCard>
                        <Feather name="info" size={40} color="#FF6690" />
                        <ClosedText style={SemiBold}>Não atendemos fim de semana</ClosedText>
                    </ClosedWeekendCard>
            );
            default:
            return <></>;
      }
}

