import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  return (
    <div>
      <input
        type="text"
        className="p-4 border w-full border-gray-200 rounded-lg bg-white outline-none transition-all focus:border-blue-400"
        {...props}
        {...field}
      />
    </div>
  );
};

export default InputHook;
