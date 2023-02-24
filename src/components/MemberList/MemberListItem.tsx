import {DefaultUserAvatarAssets} from '@puyodead1/fosscord-api-types/v9';
import React from 'react';
import {Avatar, Text} from 'react-native-paper';
import Guild from '../../stores/objects/Guild';
import GuildMember from '../../stores/objects/GuildMember';
import {CDNRoutes} from '../../utils/Endpoints';
import REST from '../../utils/REST';
import Container from '../Container';

interface Props {
  member: GuildMember;
  guild: Guild;
}

function MemberListItem({member, guild}: Props) {
  const highestRole = member.roles[0];
  const colorStyle = highestRole ? {color: highestRole.color} : {};

  return (
    <Container
      row
      horizontalCenter
      style={{
        paddingVertical: 5,
      }}>
      <Container>
        <Avatar.Image
          testID="messageAvatar"
          size={32}
          source={{
            uri: member.avatar
              ? REST.makeCDNUrl(
                  CDNRoutes.userAvatar(member.user?.id!, member.user?.avatar!),
                )
              : REST.makeCDNUrl(
                  CDNRoutes.defaultUserAvatar(
                    (Number(member.user?.discriminator) %
                      6) as DefaultUserAvatarAssets,
                  ),
                ),
          }}
          style={{backgroundColor: 'transparent'}}
        />
      </Container>
      <Container style={{marginLeft: 10}}>
        <Text style={colorStyle}>{member.user?.username}</Text>
      </Container>
    </Container>
  );
}

export default MemberListItem;
