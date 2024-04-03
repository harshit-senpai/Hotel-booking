"use client";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counters: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = () => {
    onChange(value + 1);
  };
  const onReduce = () => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  };
  return <div>Counters</div>;
};

export default Counters;
