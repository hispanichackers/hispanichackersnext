

export default function YearPicker({ setYear }) {
  return (
    <>
      <hr />
      <Button onClick={() => setYear('2022')}>2022</Button>
      <Button onClick={() => setYear('2021')}>2021</Button>
      <hr />
    </>
  );
}
