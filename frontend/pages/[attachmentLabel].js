function ViewAttachment({ attachmentLabel }) {

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={`http://localhost:8000/uploads/${attachmentLabel}`} alt="Attachment"/>
    </div>
  );
}

export async function getStaticProps(context) {
  const attachmentLabel = context.params.attachmentLabel;

  return {
    props: {
      attachmentLabel,
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          attachmentLabel: "a1",
        },
      },
      {
        params: {
          attachmentLabel: "a2",
        },
      },
    ],
  };
}

export default ViewAttachment;
