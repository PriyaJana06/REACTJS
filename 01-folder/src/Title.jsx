function Title() {
  // JSX with currly braces
  let name = "Priyanka";
  return (
    <div>
      <h1>I am the Title!</h1>
      <p>2*2 = {2*2}</p>
      <p>Hi, {name.toUpperCase()}</p>
    </div>
  );
}

// Export - Default Export
export default Title;