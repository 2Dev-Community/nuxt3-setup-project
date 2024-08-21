export const useHelloWorld = () => {
  // hello variable is state variable can be used in any component or page
  const hello = useState('hello', () => 'hello');
  return {
    hello,
  };
};
