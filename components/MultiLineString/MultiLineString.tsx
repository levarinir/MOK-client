export interface MultiLineStringProps {
  multiLineString?: string;
}

export default function MultiLineString(props: MultiLineStringProps) {
  return (
    <>
      {props.multiLineString.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}
