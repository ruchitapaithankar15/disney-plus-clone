import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
      <ContentAction>
          <CALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </Description>
          <CALogoTwo src="/images/cta-logo-two.png" />
      </ContentAction>
    </Container>
  )
}

export default Login


const Container = styled.div`
    
`
const ContentAction = styled.div`


`

const CALogoOne = styled.img`

`
const SignUp = styled.a`

   
`

const Description = styled.p`
`

const CALogoTwo = styled.img`

`
