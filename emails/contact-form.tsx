import {
  Body,
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
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  phone,
  service,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg bg-white max-w-xl">
            <Img
              src="https://provent.secureauthorities.com/logo/Pro-Vent-Services-Logo.png"
              width="150"
              height="60"
              alt="Pro-Vent Services Logo"
              className="mb-6"
            />
            <Heading className="text-2xl font-bold text-gray-800 mb-4">
              New Contact Form Submission
            </Heading>
            <Section className="mt-4">
              <Text className="text-gray-700 font-semibold text-lg mb-2">Contact Details:</Text>
              <div className="bg-gray-50 p-4 rounded-md">
                <Text className="text-gray-700"><strong>Name:</strong> {name}</Text>
                <Text className="text-gray-700"><strong>Email:</strong> {email}</Text>
                {phone && <Text className="text-gray-700"><strong>Phone:</strong> {phone}</Text>}
                {service && <Text className="text-gray-700"><strong>Service Requested:</strong> {service}</Text>}
              </div>
            </Section>
            <Section className="mt-4">
              <Text className="text-gray-700 font-semibold text-lg mb-2">Message:</Text>
              <div className="bg-gray-50 p-4 rounded-md">
                <Text className="text-gray-700 whitespace-pre-wrap">{message}</Text>
              </div>
            </Section>
            <Hr className="my-6 border-gray-300" />
            <Text className="text-sm text-gray-600">
              This message was sent through the Pro-Vent Services contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
