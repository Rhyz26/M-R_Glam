import {
  Container,
  Text,
  Grid,
  Group,
  TextInput,
  Textarea,
  Button,
  Anchor,
  Box,
} from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NumberInput } from "@mantine/core";

const Contact = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });
  return (
    <MantineProvider>
      <Container size="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
          <Text size="xl" weight={700} style={{ color: "#793b51" }}>
            Reach Out to Us – M&R Glam Fashion
          </Text>
          {/* <Text size="md" style={{ color: '#555' }}>
          "Your style, our passion, Contact us to make your dream wardrobe a reality!"
        </Text> */}
        </Box>

        {/* Contact Details */}
        <Grid>
          <Grid.Col span={4} style={{ textAlign: "center" }}>
            <Text size="lg" weight={500}>
              📧 Email
            </Text>
            <Text size="sm" color="dimmed">
              info@mrglamfashion.com
            </Text>
          </Grid.Col>
          <Grid.Col span={4} style={{ textAlign: "center" }}>
            <Text size="lg" weight={500}>
              📞 Phone
            </Text>
            <Text size="sm" color="dimmed">
              +256-123-456-789
            </Text>
          </Grid.Col>
          <Grid.Col span={4} style={{ textAlign: "center" }}>
            <Text size="lg" weight={500}>
              📍 Location
            </Text>
            <Text size="sm" color="dimmed">
              Seeta, Mukono, Uganda
            </Text>
          </Grid.Col>
        </Grid>

        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <NumberInput
            mt="sm"
            label="Phone Number"
            placeholder="Phone Number"
            min={0}
            max={99}
            key={form.key("phonenumber")}
            {...form.getInputProps("phonenumber")}
          />
          <Textarea
            size="xl"
            radius="md"
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
            className="outline-4"
          />
          <Button type="submit" mt="sm">
            Submit
          </Button>
        </form>

        {/* Google Map */}
        <Box sx={{ margin: "30px 0", textAlign: "center" }}>
          <iframe
            title="M&R Glam Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.737229740938!2d32.73291753361961!3d0.3536112598525806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8e3e1d9dbf5d%3A0x8d9a5f2f1e6cd02a!2sSeeta%2C%20Mukono%20District!5e0!3m2!1sen!2sug!4v1700000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        {/* Contact Form */}
        <Box sx={{ margin: "30px 0", textAlign: "center" }}>
          <Text
            size="lg"
            weight={500}
            style={{ marginBottom: "20px", color: "#793b51" }}
          >
            Get in Touch
          </Text>
          <form>
            <TextInput
              placeholder="Your Name"
              style={{ marginBottom: "15px" }}
              required
            />
            <TextInput
              placeholder="Phone Number"
              style={{ marginBottom: "15px" }}
              required
            />
            <TextInput
              placeholder="Email Address"
              style={{ marginBottom: "15px" }}
              required
            />
            <Textarea
              placeholder="Your Message"
              minRows={3}
              style={{ marginBottom: "15px" }}
              required
            />
            <Button
              type="submit"
              fullWidth
              style={{ backgroundColor: "#793b51" }}
            >
              Send
            </Button>
          </form>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            padding: "20px 0",
            backgroundColor: "#efdbe5",
          }}
        >
          <Text size="sm" color="dimmed">
            © 2024 M&R Glam Fashion. All rights reserved.
          </Text>
          <Group position="center" spacing="xs" style={{ marginTop: "10px" }}>
            <Anchor href="https://facebook.com" target="_blank">
              Facebook
            </Anchor>
            <Anchor href="https://twitter.com" target="_blank">
              Twitter
            </Anchor>
            <Anchor href="https://instagram.com" target="_blank">
              Instagram
            </Anchor>
          </Group>
        </Box>
      </Container>
    </MantineProvider>
  );
};

export default Contact;
