function Hello() {
  // let name = "Aditya";
  let fullName = () => {
    return "Aditya Singh";
  };
  return (
    <div>
      <h1>Hello, {fullName()}!</h1>
      <p>This is a simple React component.</p>
      <p>It demonstrates the use of JSX syntax.</p>
      <p>Happy coding!</p>
      <p>Enjoy learning React!</p>
      <p>Keep up the good work!</p>
      <p>You've got this!</p>
    </div>
  );
}

export default Hello;
