

export default function YearPicker({ setYear }) {
  return (
    <>
      <hr />
      <div onClick={() => setYear('2022')}>2022</div>
      <div onClick={() => setYear('2021')}>2021</div>
      <hr />
    </>
  );
}
