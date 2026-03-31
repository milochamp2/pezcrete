import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, phone, email, message }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New quote request from {name} via Pezcrete website</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Heading style={logoText}>PEZCRETE</Heading>
            <Text style={headerSub}>Melbourne &amp; Surrounds · Concrete Construction</Text>
          </Section>

          {/* Body */}
          <Section style={content}>
            <Heading as="h2" style={title}>New Quote Request</Heading>
            <Text style={subtitle}>
              Someone filled out the contact form on your website. Details below.
            </Text>

            <Hr style={divider} />

            {/* Contact details */}
            <Row>
              <Column style={labelCol}>
                <Text style={label}>Name</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelCol}>
                <Text style={label}>Phone</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{phone || "—"}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelCol}>
                <Text style={label}>Email</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>

            <Hr style={divider} />

            {/* Message */}
            <Text style={label}>Message</Text>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Reply CTA */}
            <Section style={ctaSection}>
              <Text style={ctaText}>
                Reply directly to this email to respond to {name}.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Pezcrete · 0422 340 335 · Pezcrete@outlook.com.au
            </Text>
            <Text style={footerNote}>
              This message was sent from the contact form at pezcrete.com.au
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ───────────────────────────────────────────── */

const body: React.CSSProperties = {
  backgroundColor: "#F5F5F5",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "2px",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  backgroundColor: "#0A0A0A",
  padding: "32px 40px 28px",
  textAlign: "center",
};

const logoText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "28px",
  letterSpacing: "6px",
  fontWeight: "700",
  margin: "0 0 6px",
};

const headerSub: React.CSSProperties = {
  color: "#888888",
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: 0,
};

const content: React.CSSProperties = {
  padding: "36px 40px",
};

const title: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#0A0A0A",
  margin: "0 0 8px",
};

const subtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#555555",
  lineHeight: "1.6",
  margin: "0 0 24px",
};

const divider: React.CSSProperties = {
  borderColor: "#eeeeee",
  margin: "20px 0",
};

const labelCol: React.CSSProperties = {
  width: "90px",
  verticalAlign: "top",
  paddingBottom: "12px",
};

const valueCol: React.CSSProperties = {
  verticalAlign: "top",
  paddingBottom: "12px",
};

const label: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#999999",
  margin: 0,
  paddingTop: "2px",
};

const value: React.CSSProperties = {
  fontSize: "15px",
  color: "#1A1A1A",
  margin: 0,
  fontWeight: "500",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#F5F5F5",
  borderLeft: "3px solid #0A0A0A",
  padding: "16px 20px",
  margin: "8px 0 24px",
  borderRadius: "0 2px 2px 0",
};

const messageText: React.CSSProperties = {
  fontSize: "15px",
  color: "#333333",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const ctaSection: React.CSSProperties = {
  backgroundColor: "#0A0A0A",
  padding: "16px 20px",
  borderRadius: "2px",
  textAlign: "center",
};

const ctaText: React.CSSProperties = {
  fontSize: "13px",
  color: "#cccccc",
  margin: 0,
};

const footer: React.CSSProperties = {
  padding: "20px 40px",
  borderTop: "1px solid #eeeeee",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "13px",
  color: "#888888",
  margin: "0 0 4px",
};

const footerNote: React.CSSProperties = {
  fontSize: "11px",
  color: "#bbbbbb",
  margin: 0,
};
