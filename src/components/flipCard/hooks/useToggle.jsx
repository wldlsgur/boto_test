const useToggle = (defaultValue = false) => {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, handleToggle };
};

export default useToggle;
