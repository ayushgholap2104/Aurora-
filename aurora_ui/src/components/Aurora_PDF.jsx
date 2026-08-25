import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },

  text: {
    marginBottom: 20,
  },
});

const auroraPdf = ({ messages }) => {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <Text style={styles.title}>Aurora</Text>
        {messages.map((message, index) => (
          <Text key={index} style={styles.text}>
            {message.sender === "bot" ? "Aurora: " : "You: "}
            {message.text}
          </Text>
        ))}
      </Page>
    </Document>
  );
};

export default auroraPdf;
