import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from  '../../components/Global'

const Wrapper = styled.div`
	background-color: ${({theme}) => theme.footer.color.background};
`
const Text = styled.h4`
	color: ${({theme}) => theme.footer.color.text};
	font-size: 14px;
	padding: 0;
`

const Footer = () => (
	<Wrapper>
		<Container>
			<Row>
				<Col sm="8">
					<Text>Copyright © 2018 Cup of Data - Made with love in Atlanta.</Text>
				</Col>
				<Col sm="2">
					<Text>Privacy Policy</Text>
				</Col>
				<Col sm="2">
					<Text>Terms of Use</Text>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default Footer;