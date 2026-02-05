import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styles'
import { type IUserInfo } from './types';

const UserInfo = ({ name, image, percentual }: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image} alt={name} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}  />
        </div>
    </Container>
  )
}

export { UserInfo }