
import ExpensiveComponent from './expensive-component';
import Game from './Game';

const Application = () => {
  

  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      <Game />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
