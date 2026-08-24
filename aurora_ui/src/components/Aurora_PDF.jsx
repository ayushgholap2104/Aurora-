import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
  },

  text: {
    marginBottom: 10,
  },
});

const auroraPdf = () => {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <Text style={styles.title}>Aurora</Text>
        <Text style={styles.text}>Hello i am testing the Document</Text>
      </Page>
    </Document>
  );
};

export default auroraPdf;
