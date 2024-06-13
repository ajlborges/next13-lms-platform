import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WaitlistEmailProps {
    firstName: string;
    lastName: string;
  }
  
  const baseUrl = process.env.COMPANY_URL
    ? `https://${process.env.COMPANY_URL}`
    : "";
  
  const companyName = process.env.COMPANY_NAME;
  
  export const WaitlistEmail = ({ firstName, lastName }: WaitlistEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Databrix - Die kollaborative Data-Science Plattform zum Lernen.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://assets.streamify.dev/logo/databrix/databrix-logo.svg"
            width="170"
            height="50"
            alt="Databrix"
            style={logo}
          />
          <Heading style={h1}>Willkommen auf der Warteliste von Databrix</Heading>
          <Text style={paragraph}>
            Hallo {firstName} {lastName},
          </Text>
          <Text style={paragraph}>
            Wir freuen uns über Ihr Interesse an Databrix. Sie erhalten
            kontinuierlich Neuigkeiten zum Projektverlauf und dem Start der
            Plattform.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={baseUrl}>
              Zur Website
            </Button>
          </Section>
          <Text style={paragraph}>
            Mit freundlichen Grüßen,
            <br />
            Team {companyName}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Stuttgart</Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default WaitlistEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#407BBF",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "210px",
    padding: "14px 7px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };