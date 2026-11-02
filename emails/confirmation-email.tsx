/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ConfirmationEmailProps {
  name: string;
  email: string;
}

export default function ConfirmationEmail({
  name,
  email,
}: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Pro-Vent Services</Preview>
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
              Thank you for contacting us!
            </Heading>
            <Text className="text-gray-700 mb-4">
              Dear {name},
            </Text>
            <Text className="text-gray-700 mb-4">
              We have received your message and appreciate you taking the time to reach out to us. Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 business hours.
            </Text>
            <Section className="bg-gray-50 p-4 rounded-md my-6">
              <Text className="text-gray-700 mb-2">
                <strong>Your contact email:</strong> {email}
              </Text>
              <Text className="text-gray-700">
                <strong>Response time:</strong> 24-48 business hours
              </Text>
            </Section>
            <Text className="text-gray-700 mb-4">
              If you have an emergency or require immediate assistance, please call us at:
            </Text>
            <Text className="text-xl font-bold text-blue-600 mb-6">
              <Link href="tel:+1234567890" className="text-blue-600">
              (780) 686-6324
              </Link>
            </Text>
            <Hr className="my-6 border-gray-300" />
            <Text className="text-sm text-gray-600">
              Best regards,<br />
              The Pro-Vent Services Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
