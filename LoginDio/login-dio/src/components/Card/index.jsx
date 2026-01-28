import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture />
                <div>
                    <h4>Sabrina Castilho</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito durante o curso de Formação Developers React da Dio...<strong>Saiba Mais</strong></p>    
            </PostInfo>
            <HasInfo>
                <h4> #react #javascript #frontend </h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
export { Card };